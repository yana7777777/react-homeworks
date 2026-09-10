import React from 'react';

const TodoItem = React.memo(function TodoItem({ task, onToggle, onDelete }) {
    console.log('Render TodoItem:', task.id);

    return (
        <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => onToggle(task.id)} className="task-text">
        {task.text}
      </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
});

export default TodoItem;