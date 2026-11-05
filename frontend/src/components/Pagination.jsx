export default function Pagination({ pagination, onPageChange }) {
  const { page, limit, totalRecords, totalPages } = pagination;
  
  const startRecord = totalRecords > 0 ? (page - 1) * limit + 1 : 0;
  const endRecord = Math.min(page * limit, totalRecords);

  // Show all page numbers (max 5 for assignment compliance, reference shows 1,2,3)
  const pages = [];
  const maxVisiblePages = 5;
  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-footer">
      <div className="pagination-info">
        Showing <span className="font-medium text-gray-900">{startRecord}</span> to <span className="font-medium text-gray-900">{endRecord}</span> of <span className="font-medium text-gray-900">{totalRecords}</span> records
      </div>
      
      <div className="pagination-controls">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="pagination-btn"
          aria-label="Previous page"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`pagination-btn ${p === page ? 'active' : ''}`}
            aria-label={`Page ${p}`}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages || totalRecords === 0}
          className="pagination-btn"
          aria-label="Next page"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
