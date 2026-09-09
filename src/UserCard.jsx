function UserCard({ user }) {
    return (
        <div className="card">
            <h3>{user.name}</h3>
            <p>Возраст: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserCard;