import React from 'react';
import { UseFormRegisterReturn, UseFormTrigger } from 'react-hook-form';

type TextAreaProps = {
    label: string;
    id: string;
    register: UseFormRegisterReturn;
    trigger: UseFormTrigger<any>;
    error?: string;
};

const FormTextArea: React.FC<TextAreaProps> = ({ label, id, register, trigger, error }) => (
    <div className="mb-4">
        <label className="mb-2 block" htmlFor={id}>
            {label}
        </label>
        <textarea
            className="block w-80 rounded border"
            id={id}
            {...register}
            onBlur={() => trigger(id)}
            rows={4}
        />
        {error && <span className="ml-1 block text-red-600">{error}</span>}
    </div>
);

export default FormTextArea;
