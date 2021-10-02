import React, { FC } from 'react';

interface AlertProps {
    message: string;
}

const Alert: FC<AlertProps> = ({ message}) => {
    debugger
    return(

        <div className="alertBlock ">
            {message}
        </div>
    );
}

export default Alert;