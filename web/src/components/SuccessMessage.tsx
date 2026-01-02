/**
 * Success Message Component
 * 
 * A reusable component for displaying success messages consistently
 * across the application.
 * 
 * UI/UX Enhancement Ideas:
 * - Add auto-dismiss after timeout
 * - Add icons (checkmark, etc.)
 * - Add animations
 * - Improve styling
 * - Add dismiss button
 * - Consider using toast notifications
 */

interface SuccessMessageProps {
  message: string;
  onDismiss?: () => void;
}

export default function SuccessMessage({ message, onDismiss }: SuccessMessageProps) {
  return (
    <div style={{ color: "green" }}>
      {message}
      {/* TODO: Add dismiss button if onDismiss is provided */}
      {/* TODO: Improve styling and add animations */}
    </div>
  );
}

