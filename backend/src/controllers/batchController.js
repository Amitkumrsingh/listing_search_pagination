import { batches } from '../data/batches.js';

export const getBatches = (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 5, 
      search = '', 
      status = 'all', 
      centre = 'all' 
    } = req.query;

    // Validate and sanitize limit - handle NaN for non-numeric input
    const parsedLimit = Number(limit);
    const currentLimit = Math.max(1, Math.min(Number.isFinite(parsedLimit) ? Math.floor(parsedLimit) : 5, 100));
    
    let results = [...batches];

    // Search: batchCode OR courseName (case-insensitive)
    if (search) {
      const term = search.toLowerCase().trim();
      results = results.filter(batch => 
        batch.batchCode.toLowerCase().includes(term) ||
        batch.courseName.toLowerCase().includes(term)
      );
    }

    // Filter by status
    if (status !== 'all') {
      results = results.filter(batch => batch.status === status);
    }

    // Filter by centre
    if (centre !== 'all') {
      results = results.filter(batch => batch.centreName === centre);
    }

    // Pagination
    const totalRecords = results.length;
    const totalPages = Math.max(1, Math.ceil(totalRecords / currentLimit));
    
    // Validate and sanitize page - handle NaN for non-numeric input
    const parsedPage = Number(page);
    const currentPage = Math.max(1, Math.min(Number.isFinite(parsedPage) ? Math.floor(parsedPage) : 1, totalPages));
    
    const startIndex = (currentPage - 1) * currentLimit;
    const endIndex = startIndex + currentLimit;
    const data = results.slice(startIndex, endIndex);

    res.json({
      success: true,
      data,
      pagination: {
        page: currentPage,
        limit: currentLimit,
        totalRecords,
        totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching batches:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};
