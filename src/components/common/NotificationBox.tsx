import type React from "react";

import '../style/generalNotification.scss';
import '../style/notificationBox.scss';
import '../style/successNotification.scss';
import '../style/userRegisterNotification.scss';

import { Icons } from "./icons";

type InventoryNotificationBoxProps = {
    messageInventoryNotification: string;
    statusInventory: 'in-stock' | 'out-stock';
};

export const InventoryNotificationBoxProps: React.FC<InventoryNotificationBoxProps> = ({messageInventoryNotification, statusInventory}) => {
    return (
        <div className={`notification-box ${statusInventory}`}>
            <span className="dot" />
            <p>{messageInventoryNotification}</p>
        </div>
    );
}

type GeneralStatusNotificationProps = {
    messageGeneralStatusNotification: string;
    timestampGeneralStatus: string;
    type?: 'info' | 'success' | 'warning' | 'error';
};

export const GeneralStatusNotificationProps: React.FC<GeneralStatusNotificationProps> = ({messageGeneralStatusNotification, timestampGeneralStatus, type = 'info'}) => {
    return (
        <div className={`general-notification ${type}`}>
            <p className="message">{messageGeneralStatusNotification}</p>
            <p className="timestamp">{timestampGeneralStatus}</p>
        </div>
    );
}

type UserStatusNotificationProps = {
    username: string;
    statusUserStatus: 'registered' | 'locked-account'
    time: string;
};

export const UserStatusNotificationProps: React.FC<UserStatusNotificationProps> = ({username, statusUserStatus, time}) => {
    return (
        <div className="notification-box user-register">
            <div className="icon">👤</div>
            <div className="info">
                <p><strong>{username}</strong> just {statusUserStatus}</p>
                <span>{time}</span>
            </div>
        </div>
    );
}

type AddedProductSuccessNotificationProps = {
    messageAddedProduct: string;
    timestampAddeduserSucces?: string;
    statusAdded: 'successfully' | 'failed' | 'pending' | 'warning' | 'info' | '';
};

export const AddedProductSuccessNotificationProps: React.FC<AddedProductSuccessNotificationProps> = ({messageAddedProduct, timestampAddeduserSucces, statusAdded = "successfully"}) => {
    return (
        <div className="success-notification">
            <div className="icon">
                <Icons.CheckCircle width={24} height={24} />
            </div>
            <div className={`content ${statusAdded}`}>
                <p className="message">{messageAddedProduct}</p>
                {timestampAddeduserSucces && <p className="timestamp">{timestampAddeduserSucces}</p>}
            </div>
        </div>
    );
}
