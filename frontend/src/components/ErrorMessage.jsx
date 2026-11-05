export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="state-container" role="alert">
      <svg
        className="state-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          stroke="#dc2626"
        />
      </svg>
      <h3 className="state-title">Failed to load batches</h3>
      <p className="state-message">{message || 'An unexpected error occurred. Please try again.'}</p>
      <button onClick={onRetry} className="btn-retry">
        Retry
      </button>
    </div>
  );
}
