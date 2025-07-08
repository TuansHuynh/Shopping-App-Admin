import '../style/userRegisterNotification.scss';

type UserRegisterNotificationProps = {
    username: string;
    time: string; // e.g. '2 minutes ago'
};

export default function UserRegisterNotification({ username, time }: UserRegisterNotificationProps) {
    return (
        <div className="notification-box user-register">
            <div className="icon">👤</div>
            <div className="info">
                <p><strong>{username}</strong> just registered</p>
                <span>{time}</span>
            </div>
        </div>
    );
}
