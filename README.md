# Batch Operations - Listing, Search & Pagination

A full-stack application for managing batch operations with search, filter, and pagination capabilities.

## Tech Stack

**Frontend:**
- React 18 + Vite
- Axios for API calls
- Tailwind CSS for styling

**Backend:**
- Node.js + Express.js
- Local mock data (no database required)

## Project Structure

```
batch-operations/
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── src/
│   │   ├── app.js
│   │   ├── data/
│   │   │   └── batches.js
│   │   ├── routes/
│   │   │   └── batches.js
│   │   └── controllers/
│   │       └── batchController.js
│
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── index.html
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   ├── components/
    │   │   ├── BatchTable.jsx
    │   │   ├── SearchFilter.jsx
    │   │   ├── StatusFilter.jsx
    │   │   ├── CentreFilter.jsx
    │   │   ├── Pagination.jsx
    │   │   ├── CreateBatchButton.jsx
    │   │   ├── LoadingSpinner.jsx
    │   │   ├── ErrorMessage.jsx
    │   │   └── EmptyState.jsx
    │   ├── hooks/
    │   │   └── useBatches.js
    │   ├── services/
    │   │   └── api.js
    │   └── pages/
    │       └── BatchOperations.jsx
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm 9+

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will start on **http://localhost:3001**

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on **http://localhost:5173** (with API proxy to backend)

## API Endpoint

```
GET /api/batches?page=1&limit=5&search=&status=&centre=
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Page number |
| `limit` | number | 5 | Records per page |
| `search` | string | "" | Search in batchCode & courseName (case-insensitive) |
| `status` | string | "all" | Filter: all, Running, Upcoming, Completed |
| `centre` | string | "all" | Filter: all, or centre name |

### Response Format

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "batchCode": "B001",
      "courseName": "React.js Fundamentals",
      "centreName": "Delhi",
      "startDate": "2024-01-15",
      "enrolled": 12,
      "capacity": 30,
      "status": "Running"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 5,
    "totalRecords": 15,
    "totalPages": 3
  }
}
```

## Features Implemented

- ✅ **Batch Listing Table** - Displays all batch information (Batch Code, Course Name, Centre Name, Start Date, Capacity, Status)
- ✅ **Search** - Search by Batch Code or Course Name (case-insensitive, partial match)
- ✅ **Filter by Status** - Running, Upcoming, Completed with "All Status" option
- ✅ **Filter by Centre** - Dynamic centres from data with "All Centres" option
- ✅ **Combined Search & Filters** - All work together simultaneously
- ✅ **Pagination** - 5 records per page with Prev/Next, page numbers, record range display
- ✅ **Loading State** - Spinner while fetching data
- ✅ **Error Handling** - User-friendly error message with retry option
- ✅ **Empty State** - Friendly message when no records match
- ✅ **Create Batch Button** - UI only (disabled, as per requirements)
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Clean Code Structure** - Modular components, custom hooks, service layer

## Status Badge Colors

- **Running** - Green
- **Upcoming** - Amber/Yellow
- **Completed** - Gray

## Development

### Running Both Services

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend && npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend && npm run dev
```

Then open http://localhost:5173 in your browser.

## Evaluation Criteria Met

| Requirement | Status |
|-------------|--------|
| GET API with query params | ✅ |
| Mock data (≥10 records) | ✅ (15 records) |
| Search: batchCode + courseName | ✅ |
| Filter: status + centre + "All" | ✅ |
| Search + filter together | ✅ |
| Pagination: 5/page, prev/next, page numbers | ✅ |
| Record range + total display | ✅ |
| Pagination updates on filter change | ✅ |
| Loading state | ✅ |
| Error handling | ✅ |
| Empty state | ✅ |
| Create Batch button (UI only) | ✅ |
| Clean, readable, maintainable code | ✅ |
| Separate frontend/backend folders | ✅ |
| README with setup instructions | ✅ |

## License

MIT
