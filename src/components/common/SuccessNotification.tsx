import { Icons } from './icons';
import '../style/successNotification.scss';

type Props = {
    message: string;
    timestamp?: string;
};

export default function SuccessNotification({ message, timestamp }: Props) {
    return (
        <div className="success-notification">
            <div className="icon">
                <Icons.CheckCircle width={24} height={24} />
            </div>
            <div className="content">
                <p className="message">{message}</p>
                {timestamp && <p className="timestamp">{timestamp}</p>}
            </div>
        </div>
    );
}
