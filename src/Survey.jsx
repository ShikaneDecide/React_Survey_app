import React, { useState } from 'react';
import axios from 'axios';
import './Survey.css';

const Savey = () => {  
  const [satisfaction, setSatisfaction] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(undefined);
  const [reason, setReason] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
   const [fullname, setfullname] = useState('');



  const handleSatisfactionChange = (event) => {
    setSatisfaction(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setfullname(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value); 
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const answered = {
      satisfaction: satisfaction,
      feedback: feedback,
      rating: rating,
      reason: reason,
      checkboxes: checkboxes,
      fullname:fullname
    };

    axios.post('http://localhost:4000/app/Questions', answered)
      .then(response => {
        console.log(response.data);
        setSatisfaction({
          satisfaction});
        setFeedback('');
        setRating({
          rating});
        setReason('');
        setCheckboxes({
          option1: false,
          option2: false,
          option3: false,

        });
        setfullname('');
        alert('Survey saved successfully.');
      
    
      })
      .catch(error => {
        alert('Fill in the Missing Fields.');
        console.log(error,alert);
      });
  };

 
 
  return (
    
    <div>
      
      
      <form className='Survey' onSubmit={handleSubmit}>
      <br/>
      <h1>Customer Satisfaction Survey</h1>
        <div>
        <label htmlFor="Fullname">
             Enter your FullName
             <br/>
            <input type="text" value={fullname} onChange={handleFullNameChange} />
          </label>
        </div>
        <div>
          <label htmlFor="satisfaction">How satisfied are you with our service?</label>
          <select id="satisfaction" name="satisfaction" value={satisfaction} onChange={handleSatisfactionChange}>
            <option value="">Select one</option>
            <option value="very-satisfied">Very satisfied</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="unsatisfied">Unsatisfied
          </option>
            <option value="very-unsatisfied">Very unsatisfied</option>
          </select>
        </div>
        <div> 
          <label htmlFor="feedback">Do you have any additional comments or feedback?</label>
          
          <textarea id="feedback" name="feedback" value={feedback} onChange={handleFeedbackChange} />
        </div>
        <div> 
          <label htmlFor="rating">How would you rate our service on a scale of 1-10?</label>
          
          <input type="number" id="rating" name="rating" min="1" max="10" value={rating} onChange={handleRatingChange} />
        </div>
        <div> 
          <label>Which features did you use during your visit? (check all that apply)</label>
          <label htmlFor="option1">
            <input type="checkbox" id="option1" name="option1" checked={checkboxes.option1} onChange={handleOptionChange} />
            Loyalty Rate
          </label>
          <label htmlFor="option2">
            <input type="checkbox" id="option2" name="option2" checked={checkboxes.option2} onChange={handleOptionChange} />
            Benefits Sought
          </label>
          <label htmlFor="option3">
            <input type="checkbox" id="option3" name="option3" checked={checkboxes.option3} onChange={handleOptionChange} />
            User Rate
          </label>
        </div>
        <div> 
             <label htmlFor="reason">What was the primary reason for visiting our website today?</label>
             <select id="reason" name="reason" value={reason} onChange={(event) => setReason(event.target.value)} required>
               <option value="">Select an option</option>
               <option value="Researching a product or service">Researching a product or service
             </option>
               <option value="Making a purchase">Making a purchase</option>
               <option value="Getting customer support">Getting customer support</option>
               <option value="Finding company information">Finding company information</option>
               <option value="Other">Other</option>
             </select>
             </div>
        <button type="submit">Submit Survey</button>
      </form>
      
    </div>
  );
};

export default Savey;
