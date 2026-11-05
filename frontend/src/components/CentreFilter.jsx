export default function CentreFilter({ value, onChange, centres = [] }) {
  const centreOptions = [
    { value: 'all', label: 'All Centres' },
    ...centres.map((centre) => ({ value: centre, label: centre })),
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="filter-select"
      aria-label="Filter by centre"
    >
      {centreOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
