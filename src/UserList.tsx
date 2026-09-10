function UserList() {
    const users = ['Иван Иванов', 'Мария Смирнова', 'Алексей Кузнецов'];

    return (
        <div className="user-list">
            <h2>Список пользователей</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;