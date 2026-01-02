/**
 * Show Data Page Component
 * 
 * Displays all saved data for the current user. Data is fetched when the component mounts.
 * 
 * UI/UX Enhancement Ideas:
 * - Add pagination for large datasets
 * - Add filtering and sorting capabilities
 * - Add search functionality
 * - Improve data visualization (cards, tables, timeline view)
 * - Add data export functionality (CSV, JSON)
 * - Add delete/edit functionality for individual items
 * - Add refresh button to reload data
 * - Improve loading state (skeleton screens instead of "Loading...")
 * - Add empty state with helpful message
 * - Add date grouping (Today, Yesterday, This Week, etc.)
 * - Improve responsive design for mobile
 * - Add infinite scroll or "Load more" button
 * - Add data visualization charts/graphs
 * - Consider adding different view modes (list, grid, timeline)
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/client";

// TypeScript interface defining the structure of data items returned from the API
interface DataItem {
  id: number;
  user_id: number;
  json_data: Record<string, unknown>; // Flexible object to hold any JSON data
  timestamp: string; // ISO 8601 format timestamp
}

export default function ShowData() {
  // Component state management
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // TODO: Add pagination state: const [page, setPage] = useState(1);
  // TODO: Add filter state: const [filter, setFilter] = useState("");

  /**
   * Fetch data when component mounts
   * 
   * useEffect runs after the component renders. The empty dependency array []
   * means this only runs once when the component first mounts.
   * 
   * TODO: Add refresh functionality (call fetchData on button click)
   * TODO: Add polling to auto-refresh data periodically
   * TODO: Add error retry logic
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getData();
        // API returns an array directly
        if (Array.isArray(response)) {
          setData(response);
          // TODO: Consider sorting data by timestamp (newest first)
          // TODO: Consider adding client-side filtering/pagination here
        } else {
          setData([]);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to load data. Please try again.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs once on mount

  // Show loading state while data is being fetched
  // TODO: Replace with skeleton screen or spinner component for better UX
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Show Data</h1>
      
      {/* Error message display */}
      {error && <div style={{ color: "red" }}>{error}</div>}
      
      {/* Empty state - shown when no data is available */}
      {data.length === 0 ? (
        <p>No data found.</p>
        // TODO: Improve empty state with helpful message and call-to-action
      ) : (
        // Data list - displays all saved items
        // TODO: Improve layout with cards, better spacing, and visual hierarchy
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div>
                <strong>ID:</strong> {item.id}
              </div>
              <div>
                <strong>Data:</strong> <pre>{JSON.stringify(item.json_data, null, 2)}</pre>
                {/* TODO: Improve JSON display - consider syntax highlighting */}
              </div>
              <div>
                <small><strong>Timestamp:</strong> {new Date(item.timestamp).toLocaleString()}</small>
                {/* TODO: Add relative time display (e.g., "2 hours ago") */}
              </div>
              {/* TODO: Add edit/delete buttons for each item */}
            </li>
          ))}
        </ul>
      )}
      
      {/* TODO: Add pagination controls if implementing pagination */}
      {/* TODO: Add filter/search UI */}
      
      <Link to="/">Back to Home</Link>
    </div>
  );
}

