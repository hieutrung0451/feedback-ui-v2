import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

interface Feedback {
  id: string;
  text: string;
  rating: number;
}

interface FeedbackProps {
  handleAdd: (feedback: Feedback) => void;
}

function FeedbackForm({ handleAdd }: FeedbackProps) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFeedback = {
      id: uuidv4(),
      text,
      rating,
    };

    handleAdd(newFeedback);
    setText('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate this movie?</h2>
        <RatingSelect select={setRating} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit'>Send</Button>
          {/* <Button version='secondary'>Cancel</Button> */}
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
