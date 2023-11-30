import FeedbackItem from './FeedbackItem';

interface Feedback {
  id: number;
  rating: number;
  text: string;
}

interface FeedbacksProps {
  feedbacks: Feedback[];
  handleDelete: (id: number) => void;
  handleEdit: () => void;
}

function FeedbackList({ feedbacks, handleDelete, handleEdit }: FeedbacksProps) {
  return (
    <div className='feedback-list'>
      {feedbacks.map((item) => (
        <FeedbackItem
          id={item.id}
          key={item.id}
          text={item.text}
          rating={item.rating}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
