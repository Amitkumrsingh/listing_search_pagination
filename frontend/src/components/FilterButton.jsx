import { forwardRef } from 'react';

const FilterButton = forwardRef(function FilterButton({ onClick, isActive }, ref) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`filter-btn ${isActive ? 'bg-orange-50 border-orange-200 text-orange-700' : ''}`}
      aria-label="Filter options"
      aria-expanded={isActive}
      aria-haspopup="true"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    </button>
  );
});

FilterButton.displayName = 'FilterButton';

export default FilterButton;
