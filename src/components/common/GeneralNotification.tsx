import '../style/generalNotification.scss';

import React from 'react';

type GeneralNotificationProps = {
    message: string;
    timestamp: string;
    type?: 'info' | 'success' | 'warning' | 'error';
};

const GeneralNotification: React.FC<GeneralNotificationProps> = ({ message, timestamp, type = 'info' }) => {
    return (
        <div className={`general-notification ${type}`}>
            <p className="message">{message}</p>
            <p className="timestamp">{timestamp}</p>
        </div>
    );
};

export default GeneralNotification;

