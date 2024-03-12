import React, { useEffect } from 'react';
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';

type FormRadioInputProps = {
    label: string;
    id: string;
    options: { label: string; value: string }[];
    register: UseFormRegisterReturn;
    setValue: UseFormSetValue<any>;
    defaultValue?: string;
    error?: string;
};

const FormRadioInput: React.FC<FormRadioInputProps> = ({
    label,
    id,
    options,
    register,
    setValue,
    defaultValue,
    error,
}) => {
    useEffect(() => {
        if (defaultValue) {
            setValue(id, defaultValue);
        }
    }, [defaultValue, setValue, id]);

    return (
        <div className="mb-4">
            <label className="mb-2 block" htmlFor={id}>
                {label}
            </label>
            {options.map((option, index) => (
                <div key={index} className="mr-4 inline-block">
                    <input
                        type="radio"
                        id={`${id}-${option.value}`}
                        value={option.value}
                        {...register}
                        className="mr-2"
                    />
                    <label htmlFor={`${id}-${option.value}`}>{option.label}</label>
                </div>
            ))}
            {error && <span className="ml-1 block text-red-600">{error}</span>}
        </div>
    );
};

export default FormRadioInput;
