import React, { useState } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import ProgressBar from './ProgressBar';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [activeTaskId, setActiveTaskId] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const setActiveTask = (id) => {
        setActiveTaskId(id);
    };

    return (
        <div className="container mx-auto p-4 border mt-4 bg-purple-100">
            <AddTask addTask={addTask} />
            <ProgressBar tasks={tasks} />
            <div className="mt-4">
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                        toggleCompletion={toggleCompletion}
                        setActiveTask={setActiveTask}
                        isActive={task.id === activeTaskId}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
