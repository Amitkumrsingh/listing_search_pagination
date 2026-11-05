import { useState, useEffect } from 'react';
import { useBatches } from '../hooks/useBatches';
import { getCentres } from '../services/api';
import SearchFilter from '../components/SearchFilter';
import StatusFilter from '../components/StatusFilter';
import CentreFilter from '../components/CentreFilter';
import FilterButton from '../components/FilterButton';
import BatchTable from '../components/BatchTable';
import Pagination from '../components/Pagination';
import CreateBatchButton from '../components/CreateBatchButton';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function BatchOperations() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [centre, setCentre] = useState('all');
  const [centres, setCentres] = useState([]);
  const limit = 5;

  // Debounce search input (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch unique centres for filter dropdown
  useEffect(() => {
    const fetchCentres = async () => {
      try {
        const data = await getCentres();
        setCentres(data);
      } catch (err) {
        console.error('Failed to fetch centres:', err);
      }
    };
    fetchCentres();
  }, []);

  const { data, pagination, loading, error, refetch } = useBatches({
    page,
    limit,
    search: debouncedSearch,
    status,
    centre,
  });

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setPage(1);
  };

  const handleCentreChange = (value) => {
    setCentre(value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleRetry = () => {
    refetch();
  };

  // Render loading state inside table area, keep header/filters visible
  if (loading) {
    return (
      <div>
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">Batch Operations</h1>
          <CreateBatchButton />
        </header>

        {/* Search/Filter Panel */}
        <div className="filter-panel">
          <div className="search-wrapper">
            <SearchFilter value={search} onChange={handleSearch} placeholder="Search by Name or Tag" />
          </div>
          <StatusFilter value={status} onChange={handleStatusChange} />
          <CentreFilter value={centre} onChange={handleCentreChange} centres={centres} />
          <FilterButton onClick={() => {}} isActive={false} />
        </div>

        {/* Table Card with Loading */}
        <div className="table-card">
          <div className="table-wrapper">
            <LoadingSpinner />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">Batch Operations</h1>
          <CreateBatchButton />
        </header>

        {/* Search/Filter Panel */}
        <div className="filter-panel">
          <div className="search-wrapper">
            <SearchFilter value={search} onChange={handleSearch} placeholder="Search by Name or Tag" />
          </div>
          <StatusFilter value={status} onChange={handleStatusChange} />
          <CentreFilter value={centre} onChange={handleCentreChange} centres={centres} />
          <FilterButton onClick={() => {}} isActive={false} />
        </div>

        {/* Table Card with Error */}
        <div className="table-card">
          <div className="table-wrapper">
            <ErrorMessage message={error} onRetry={handleRetry} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-title">Batch Operations</h1>
        <CreateBatchButton />
      </header>

      {/* Search/Filter Panel */}
      <div className="filter-panel">
        <div className="search-wrapper">
          <SearchFilter value={search} onChange={handleSearch} placeholder="Search by Name or Tag" />
        </div>
        <StatusFilter value={status} onChange={handleStatusChange} />
        <CentreFilter value={centre} onChange={handleCentreChange} centres={centres} />
        <FilterButton onClick={() => {}} isActive={false} />
      </div>

      {/* Table Card - Always render, BatchTable handles empty data */}
      <div className="table-card">
        <BatchTable batches={data} limit={limit} />
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
