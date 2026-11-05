export default function CreateBatchButton() {
  return (
    <button
      type="button"
      disabled
      title="UI only - no functionality implemented"
      className="btn-create-batch"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      <span>Create Batch</span>
    </button>
  );
}
