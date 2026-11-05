import { useState, useEffect, useCallback, useRef } from 'react';
import { getBatches } from '../services/api';

export function useBatches({ page, limit, search, status, centre }) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    totalRecords: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  const fetchBatches = useCallback(async () => {
    // Abort any in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setError(null);
    try {
      const response = await getBatches({ page, limit, search, status, centre }, controller.signal);
      // Ignore if this request was aborted
      if (controller.signal.aborted) return;
      
      if (response.success) {
        setData(response.data);
        setPagination(response.pagination);
      } else {
        throw new Error(response.message || 'Failed to fetch batches');
      }
    } catch (err) {
      // Ignore aborted requests
      if (err.name === 'AbortError' || controller.signal.aborted) return;
      
      setError(err.message);
      setData([]);
      setPagination({ page: 1, limit, totalRecords: 0, totalPages: 0 });
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [page, limit, search, status, centre]);

  useEffect(() => {
    fetchBatches();
    // Cleanup on unmount or when dependencies change
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchBatches]);

  return { data, pagination, loading, error, refetch: fetchBatches };
}
