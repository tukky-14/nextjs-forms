'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import FormInput from '@/components/form-input';
import FormRadioInput from '@/components/form-radio-input';
import FormTextArea from '@/components/form-textarea';
import SendButton from '@/components/send-button';
import { schema } from '@/libs/validation';
import { FormPage3Data } from '@/types/form-input';

const FormPage3: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        trigger,
    } = useForm<FormPage3Data>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormPage3Data> = (data) => {
        console.log(data);
    };

    return (
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="お名前"
                id="name"
                register={register('name')}
                trigger={trigger}
                error={errors.name?.message}
            />
            <FormInput
                label="年齢"
                id="age"
                type="number"
                register={register('age')}
                trigger={trigger}
                error={errors.age?.message}
            />
            <FormRadioInput
                label="性別"
                id="gender"
                options={[
                    { label: '男性', value: 'male' },
                    { label: '女性', value: 'female' },
                    { label: 'その他', value: 'other' },
                ]}
                register={register('gender')}
                setValue={setValue}
                defaultValue="male"
                error={errors.gender?.message}
            />
            <FormRadioInput
                label="満足度"
                id="satisfaction"
                options={[
                    { label: '非常に満足', value: 'very_satisfied' },
                    { label: '満足', value: 'satisfied' },
                    { label: '普通', value: 'neutral' },
                    { label: '不満', value: 'unsatisfied' },
                    { label: '非常に不満', value: 'very_unsatisfied' },
                ]}
                register={register('satisfaction')}
                setValue={setValue}
                defaultValue="neutral"
                error={errors.satisfaction?.message}
            />
            <FormTextArea
                label="フィードバック"
                id="feedback"
                register={register('feedback')}
                trigger={trigger}
                error={errors.feedback?.message}
            />
            <SendButton />
        </form>
    );
};

export default FormPage3;
