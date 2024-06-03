import React from 'react';
import { Form as FormUI } from '../../ui/Form';
import { sendMessage } from '../../service/telegram';
import { useTelegram } from '../../hooks';

const Form = () => {
    const { user, onClose } = useTelegram();

    const onSubmit = async (inputText: string) => {
        if(!user) return;
        const text = `Congratulations, bro its dev  \nMessage: ${inputText}`;
        await sendMessage(user.id, text);
        onClose();
    };

    return <FormUI onSubmit={onSubmit} />;
};

export default Form;
