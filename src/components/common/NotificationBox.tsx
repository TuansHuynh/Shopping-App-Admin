import '../style/notificationBox.scss';

type NotificationBoxProps = {
    message: string;
    status: 'in-stock' | 'out-stock';
};

export default function NotificationBox({ message, status }: NotificationBoxProps) {
    return (
        <div className={`notification-box ${status}`}>
            <span className="dot" />
            <p>{message}</p>
        </div>
    );
}
