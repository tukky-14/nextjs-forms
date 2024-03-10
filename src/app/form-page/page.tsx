'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import FormInput from '@/components/form-input';
import { schema } from '@/libs/validation';
import { FormPageData } from '@/types/form-input';

const FormPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormPageData>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormPageData> = (data) => {
        console.log(data);
    };

    return (
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="名前"
                id="name"
                register={register('name')}
                error={errors.name?.message}
            />
            <FormInput
                label="年齢"
                id="age"
                register={register('age')}
                error={errors.age?.message}
            />
            <button
                className="rounded bg-blue-600 px-2 py-1 text-white hover:bg-blue-700"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default FormPage;
