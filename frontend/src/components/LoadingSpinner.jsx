export default function LoadingSpinner() {
  return (
    <div className="state-container" role="status" aria-live="polite">
      <div className="loading-spinner" aria-hidden="true" />
      <p className="state-message">Loading batches...</p>
    </div>
  );
}
