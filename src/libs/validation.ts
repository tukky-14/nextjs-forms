import * as z from 'zod';

export const schema = z.object({
    name: z
        .string()
        .min(1, { message: '必須入力です。' })
        .max(10, { message: '名前は10文字以内でご入力ください。' }),
    age: z.string().min(1, { message: '必須入力です。' }),
});
