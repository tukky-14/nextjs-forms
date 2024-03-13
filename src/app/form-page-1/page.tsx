'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import FormInput from '@/components/form-input';
import SendButton from '@/components/send-button';
import { schema } from '@/libs/validation';
import { FormPage1Data } from '@/types/form-input';

const FormPage1: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<FormPage1Data>({
        resolver: zodResolver(schema),
        defaultValues: { name: '山田 太郎', age: 20 },
    });

    const onSubmit: SubmitHandler<FormPage1Data> = (data) => {
        console.log(data);
    };

    return (
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="名前"
                id="name"
                register={register('name')}
                trigger={trigger}
                error={errors.name?.message}
            />
            <FormInput
                label="年齢"
                id="age"
                register={register('age')}
                trigger={trigger}
                error={errors.age?.message}
            />
            <SendButton />
        </form>
    );
};

export default FormPage1;
