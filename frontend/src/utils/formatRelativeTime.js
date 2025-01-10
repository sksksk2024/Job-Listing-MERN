// utils/formatRelativeTime.js
import { formatDistanceToNow } from 'date-fns';

const formatRelativeTime = (dateString) => {
  try {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true }); // e.g., "1 day ago"
  } catch (error) {
    console.error('Invalid date:', dateString);
    return 'It was a time before';
  }
};

export default formatRelativeTime;
