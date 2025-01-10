import { formatDistanceToNow } from 'date-fns';

const formatRelativeTime = (dateString) => {
  try {
    // console.log('Received dateString:', dateString);
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      // Invalid date
      throw new Error('Invalid date format');
    }

    return formatDistanceToNow(date, { addSuffix: true }); // e.g., "1 day ago"
  } catch (error) {
    console.error('Invalid date:', dateString, error.message);
    return 'It was a time before';
  }
};

export default formatRelativeTime;
