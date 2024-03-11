'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import FormInput from '@/components/form-input';
import SendButton from '@/components/send-button';
import { schema } from '@/libs/validation';
import { FormPageData } from '@/types/form-input';

const FormPage2: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<FormPageData>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormPageData> = (data) => {
        console.log(data);
    };

    return (
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="お問い合わせ日"
                id="date"
                type="date"
                register={register('date')}
                trigger={trigger}
                error={errors.name?.message}
            />
            <FormInput
                label="お名前"
                id="name"
                register={register('name')}
                trigger={trigger}
                error={errors.name?.message}
            />
            <FormInput
                label="メールアドレス"
                id="email"
                type="email"
                register={register('email')}
                trigger={trigger}
                error={errors.email?.message}
            />
            <FormInput
                label="件名"
                id="subject"
                register={register('subject')}
                trigger={trigger}
                error={errors.subject?.message}
            />
            <FormInput
                label="お問い合わせ内容"
                id="message"
                type="textarea"
                register={register('message')}
                trigger={trigger}
                error={errors.message?.message}
            />
            <SendButton />
        </form>
    );
};

export default FormPage2;
