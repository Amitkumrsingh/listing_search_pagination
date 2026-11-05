export default function SearchFilter({ value, onChange, placeholder = 'Search by Name or Tag' }) {
  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">Search batches</label>
      <svg
        className="search-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      {/* No clear (X) button per reference */}
    </div>
  );
}
