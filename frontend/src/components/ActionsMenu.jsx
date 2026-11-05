export default function ActionsMenu({ batchId }) {
  // Three-dot actions menu - UI only per reference
  return (
    <div className="actions-menu">
      <button
        className="actions-btn"
        aria-label="Actions"
        disabled
        title="UI only - no functionality implemented"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth={2} />
          <circle cx="19" cy="12" r="1" stroke="currentColor" strokeWidth={2} />
          <circle cx="5" cy="12" r="1" stroke="currentColor" strokeWidth={2} />
        </svg>
      </button>
    </div>
  );
}
