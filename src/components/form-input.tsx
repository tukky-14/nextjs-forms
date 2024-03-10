import React from 'react';
import { UseFormRegisterReturn, UseFormTrigger } from 'react-hook-form';

type FormInputProps = {
    label: string;
    id: string;
    register: UseFormRegisterReturn;
    trigger: UseFormTrigger<any>;
    error?: string;
};

const FormInput: React.FC<FormInputProps> = ({ label, id, register, trigger, error }) => (
    <div className="mb-2">
        <label htmlFor={id}>{label}</label>
        <input
            className="ml-2 inline-block rounded border"
            id={id}
            {...register}
            onBlur={() => trigger(id)}
        />
        {error && <span className="ml-1 inline-block text-red-600">{error}</span>}
    </div>
);

export default FormInput;
