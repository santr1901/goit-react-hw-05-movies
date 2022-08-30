import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getReviews } from 'service';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id).then(response => {
      console.log(response.results);
      const allReviews = response.results.map(review => ({
        author: review.author,
        content: review.content,
      }));
      setReviews(allReviews);
    });
  }, [id]);

  const showRewiews = () => {
    if (reviews.length === 0) {
      return <p>Sorry the are no reviews</p>;
    }
    return reviews.map(review => (
      <li key={review.author}>
        <h4>Author: {review.author}</h4>
        <p>{review.content}</p>
      </li>
    ));
  };

  return <ul>{showRewiews()}</ul>;
};

export default Reviews;
