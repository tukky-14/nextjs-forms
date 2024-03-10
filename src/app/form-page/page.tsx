'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(1, { message: '必須入力です。' }).max(10, { message: 'Too long' }),
    age: z.string().min(1, { message: '必須入力です。' }),
});

type FormData = {
    name: string;
    age: number;
};

const FormPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
                <label htmlFor="name">名前</label>
                <input
                    className="ml-2 inline-block rounded border"
                    id="name"
                    {...register('name')}
                />
                {errors.name && (
                    <span className="ml-1 inline-block text-red-600">{errors.name?.message}</span>
                )}
            </div>
            <div className="mb-2">
                <label htmlFor="age">年齢</label>
                <input
                    type="number"
                    className="ml-2 inline-block rounded border"
                    id="age"
                    {...register('age')}
                />
                {errors.age && (
                    <span className="ml-1 inline-block text-red-600">{errors.age?.message}</span>
                )}
            </div>
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
