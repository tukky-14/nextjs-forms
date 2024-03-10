'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
    name: string;
};

const FormPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
                <label htmlFor="name">Name</label>
                <input
                    className="ml-2 inline-block rounded border"
                    id="name"
                    {...register('name', { required: true })}
                />
                {errors.name && (
                    <span className="ml-1 inline-block text-red-600">This field is required</span>
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
