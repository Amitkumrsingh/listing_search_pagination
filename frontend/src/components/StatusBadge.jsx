export default function StatusBadge({ status }) {
  const statusConfig = {
    Running: { 
      className: 'status-badge running', 
      dotClass: 'status-dot running',
      label: 'Running'
    },
    Upcoming: { 
      className: 'status-badge upcoming', 
      dotClass: 'status-dot upcoming',
      label: 'Upcoming'
    },
    Completed: { 
      className: 'status-badge completed', 
      dotClass: 'status-dot completed',
      label: 'Completed'
    },
  };

  const config = statusConfig[status] || statusConfig.Completed;

  return (
    <span className={config.className}>
      <span className={config.dotClass} aria-hidden="true" />
      {config.label}
    </span>
  );
}
