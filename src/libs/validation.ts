import * as z from 'zod';

export const schema = z.object({
    name: z
        .string()
        .min(1, { message: '必須入力です。' })
        .max(10, { message: '名前は10文字以内でご入力ください。' }),
    age: z
        .string()
        .min(1, { message: '必須入力です。' })
        .transform((val) => parseFloat(val))
        .refine((val) => !Number.isNaN(val), {
            message: '数値で入力してください。',
        })
        .refine((val) => Number.isInteger(val), {
            message: '整数で入力してください。',
        })
        .refine((val) => val > 0, {
            message: '正の整数で入力してください。',
        }),
    email: z
        .string()
        .min(1, { message: '必須入力です。' })
        .email({ message: 'メールアドレスの形式で入力してください。' }),
    subject: z
        .string()
        .min(1, { message: '必須入力です。' })
        .max(20, { message: '件名は20文字以内でご入力ください。' }),
    message: z
        .string()
        .min(1, { message: '必須入力です。' })
        .max(100, { message: 'お問い合わせ内容は100文字以内でご入力ください。' }),
    date: z.string().min(1, { message: '必須入力です。' }),
});
