/**
 * Error Message Component
 * 
 * A reusable component for displaying error messages consistently
 * across the application.
 * 
 * UI/UX Enhancement Ideas:
 * - Add different error types (error, warning, info)
 * - Add dismissible errors with close button
 * - Add icons for different error types
 * - Add animations (slide in, fade in)
 * - Improve accessibility (role="alert", aria-live)
 * - Add auto-dismiss after timeout
 * - Consider using toast notifications for non-blocking errors
 */

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
}

export default function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  return (
    <div style={{ color: "red" }}>
      {message}
      {/* TODO: Add dismiss button if onDismiss is provided */}
      {/* TODO: Improve styling and add animations */}
    </div>
  );
}

