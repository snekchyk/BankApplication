import { z } from "zod";

// Схема, яка перевірятиме дані в runtime (під час роботи програми)
export const RegisterSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    email: z.string().email('Invalid email address'),
    age: z.number().min(14, 'You must be at least 14 years old to open an account'),
});

// Автоматично створюємо TypeScript тип з цієї схеми
export type RegistrationInputModel = z.infer<typeof RegisterSchema>;