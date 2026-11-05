import EmptyState from './EmptyState';
import StatusBadge from './StatusBadge';
import ActionsMenu from './ActionsMenu';

export default function BatchTable({ batches, limit = 5 }) {
  const hasData = batches && batches.length > 0;
  if (!hasData) return <EmptyState />;
  const emptyRows = limit;

  return (
    <div className="table-wrapper">
      <table className="data-table" role="grid">
        <thead>
          <tr>
            <th scope="col">BATCH CODE</th>
            <th scope="col">COURSE</th>
            <th scope="col">CENTER</th>
            <th scope="col">START DATE</th>
            <th scope="col">CAPACITY</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {hasData ? (
            batches.map((batch) => (
              <tr key={batch.id}>
                <td className="batch-code">{batch.batchCode}</td>
                <td className="course-name">{batch.courseName}</td>
                <td className="center-name">{batch.centreName}</td>
                <td className="start-date">{batch.startDate}</td>
                <td className="capacity">{batch.enrolled}/{batch.capacity}</td>
                <td>
                  <StatusBadge status={batch.status} />
                </td>
                <td>
                  <ActionsMenu batchId={batch.id} />
                </td>
              </tr>
            ))
          ) : (
            // Render empty rows only when no data found
            Array.from({ length: emptyRows }, (_, i) => (
              <tr key={`empty-${i}`} className="empty-row">
                <td className="batch-code"><span className="text-gray-300">—</span></td>
                <td className="course-name"><span className="text-gray-300">—</span></td>
                <td className="center-name"><span className="text-gray-300">—</span></td>
                <td className="start-date"><span className="text-gray-300">—</span></td>
                <td className="capacity"><span className="text-gray-300">—</span></td>
                <td><span className="text-gray-300">—</span></td>
                <td>
                  {/* No actions menu for empty rows */}
                  <div className="w-8 h-8 flex items-center justify-center" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
