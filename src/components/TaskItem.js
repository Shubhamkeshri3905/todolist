import React from 'react';

const TaskItem = ({ task, removeTask, toggleCompletion, setActiveTask, isActive }) => {
  return (
    <div className={`flex items-center justify-between p-4 border-b ${isActive ? 'bg-blue-100' : ''}`}>
      <div>
        <h3 className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Scheduled: {task.scheduledDate}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => toggleCompletion(task.id)}
          className={`mr-2 p-2 ${task.completed ? 'bg-green-500' : 'bg-red-500'} text-white rounded`}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </button>
        <button
          onClick={() => setActiveTask(task.id)}
          className="mr-2 p-2 bg-yellow-500 text-white rounded"
        >
          Active
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className="p-2 bg-red-600 text-white rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
