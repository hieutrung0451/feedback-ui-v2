import { FaTimes, FaEdit } from 'react-icons/fa';

import Card from './shared/Card';

interface Feedback {
  id: number;
  rating: number;
  text: string;
}

interface FeedbackProps {
  id: number;
  text: string;
  rating: number;
  handleDelete: (id: number) => void;
  handleEdit: (feedback: Feedback) => void;
}

function FeedbackItem({
  id,
  text,
  rating,
  handleDelete,
  handleEdit,
}: FeedbackProps) {
  const feedbackItem = { id, text, rating };

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => handleDelete(id)}>
        <FaTimes color='white' />
      </button>
      <button className='edit' onClick={() => handleEdit(feedbackItem)}>
        <FaEdit color='white' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
}

export default FeedbackItem;
