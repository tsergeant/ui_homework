/**
 * Save Data Page Component
 * 
 * Allows users to save a simple text message that gets stored as JSON data.
 * The message is wrapped in { content: "message" } format before being sent to the API.
 * 
 * UI/UX Enhancement Ideas:
 * - Change input to textarea for longer messages
 * - Add character counter
 * - Add message preview before saving
 * - Improve success/error feedback (toast notifications, animations)
 * - Add loading spinner during save
 * - Add "Save and add another" option
 * - Implement draft auto-save (localStorage)
 * - Add rich text editing capabilities
 * - Add file/image upload support
 * - Add tags/categories for organizing data
 * - Improve form layout and styling
 * - Add keyboard shortcuts (Ctrl+S to save)
 * - Add undo functionality
 * - Consider adding a form to create more complex JSON structures
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { saveData } from "../api/client";

export default function SaveData() {
  // Form state management
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // TODO: Add loading state: const [loading, setLoading] = useState(false);
  // TODO: If you need navigation, uncomment: const navigate = useNavigate();

  /**
   * Handle form submission
   * 
   * Creates a JSON object from the user's message and saves it to the server.
   * The API will wrap this in { json_data: {...}, timestamp: "..." } format.
   * 
   * TODO: Add form validation (e.g., minimum/maximum length)
   * TODO: Add loading state to disable form during save
   * TODO: Consider adding optimistic updates (show success immediately, rollback on error)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // TODO: setLoading(true);

    try {
      // Create JSON object with content field
      // TODO: You could extend this to support more complex data structures
      const jsonData = { content: message };
      await saveData(jsonData);
      setSuccess(true);
      setMessage("");
      // TODO: Consider auto-clearing success message after a delay
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to save data. Please try again.";
      setError(errorMessage);
    } finally {
      // TODO: setLoading(false);
    }
  };

  return (
    <div>
      <h1>Save Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Message:
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message here"
            />
          </label>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>Data saved successfully!</div>}
        <button type="submit">Save</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

