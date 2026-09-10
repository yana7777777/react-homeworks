import React from 'react';

// Оборачиваем компонент в React.memo, чтобы избежать лишних ререндеров
const TodoItem = React.memo(function TodoItem({ task, onToggle, onDelete }) {
    // Лог для отслеживания рендеров
    console.log('Render TodoItem:', task.id);

    return (
        <li className={task.completed ? 'completed' : ''}>
            {/* Клик по тексту переключает статус */}
            <span onClick={() => onToggle(task.id)} className="task-text">
        {task.text}
      </span>
            {/* Кнопка удаления */}
            <button onClick={() => onDelete(task.id)}>Удалить</button>
        </li>
    );
});

export default TodoItem;