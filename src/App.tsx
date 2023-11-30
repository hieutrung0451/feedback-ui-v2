import { useState } from 'react';

import Header from './components/Header';
import Movie from './components/Movie';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbacksData from './components/data/FeedbackData';

interface feedback {
  id: number;
  rating: number;
  text: string;
}

interface feedbackEdit {
  item?: feedback;
  isEdit: boolean;
}

function App() {
  const [feedbacks, setFeedbacks] = useState<feedback[]>(FeedbacksData);
  const [feedbackEdit, setFeedbackEdit] = useState<feedbackEdit>({
    isEdit: false,
  });

  const addFeedback = (newFeedback: feedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  const deleteFeedback = (id: number) => {
    const newFeedbacks = feedbacks.filter((item) => item.id !== id);

    setFeedbacks(newFeedbacks);
  };

  const editFeedback = (item: feedback) => {
    console.log(item);

    setFeedbackEdit({
      item,
      isEdit: true,
    });
  };

  return (  
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 120px',
        }}
      >
        <Movie />
        <div>
          <FeedbackForm handleAdd={addFeedback} feedbackEdit={feedbackEdit} />
          <FeedbackList
            feedbacks={feedbacks}
            handleDelete={deleteFeedback}
            handleEdit={editFeedback}
          />
        </div>
      </div>
    </>
  );
}

export default App;
