import React from 'react';

const ProgressBar = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const percentageCompleted = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div className="my-4 p-5">
            <div className="h-4 bg-gray-300 rounded">
                <div
                    className="h-4 bg-green-500 rounded"
                    style={{ width: `${percentageCompleted}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{completedTasks} of {totalTasks} tasks completed</p>
        </div>
    );
};

export default ProgressBar;
