import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && scheduledDate) {
      addTask({ title, description, scheduledDate });
      setTitle('');
      setDescription('');
      setScheduledDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5   p-5 ">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded"
      ></textarea>
      <input
        type="date"
        value={scheduledDate}
        onChange={(e) => setScheduledDate(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">Add Task</button>
    </form>
  );
};

export default AddTask;
