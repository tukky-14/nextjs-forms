import * as z from 'zod';

export const schema = z.object({
    name: z
        .string()
        .min(1, { message: '必須入力です。' })
        .max(10, { message: '名前は10文字以内でご入力ください。' }),
    age: z
        .string()
        .min(1, { message: '必須入力です。' })
        .max(3, { message: '年齢は3桁以内でご入力ください。' }),
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
