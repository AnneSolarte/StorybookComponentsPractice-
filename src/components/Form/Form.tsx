import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { FormData } from './Form.types';
import InputPassword from '../InputPassword/InputPassword';
import Select from '../Select/Select';

const FormExample: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        userType: '',
        username: '',
        password: '',
        description: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const formRef = useRef<HTMLFormElement>(null);

    const validateForm = (data: FormData) => {
        const newErrors: Record<string, string> = {};
        if (!data.userType) newErrors.userType = "Please select a user type";
        if (!data.username) newErrors.username = "Username is required";
        if (!data.password) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
            setFormData({
                userType: '',
                username: '',
                password: '',
                description: ''
            });
            
            setTimeout(() => {
                const firstInput = formRef.current?.querySelector('input, select');
                (firstInput as HTMLElement)?.focus();
            }, 0);
        } else {
            const firstError = Object.keys(formErrors)[0];
            formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && e.target instanceof HTMLElement) {
            const form = e.currentTarget as HTMLFormElement;
            const focusableElements = form.querySelectorAll<HTMLElement>(
                'input:not([disabled]), select:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            
            const currentIndex = Array.from(focusableElements).indexOf(e.target);
            
            if (currentIndex > -1) {
                e.preventDefault();
                
                if (currentIndex === focusableElements.length - 1) {
                    form.requestSubmit();
                } else {
                    focusableElements[currentIndex + 1]?.focus();
                }
            }
        }
    };

    return (
        <form 
            ref={formRef}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            className="flex flex-col w-full max-w-md mx-auto p-6 bg-white rounded-lg gap-6 shadow-2xl"
            aria-labelledby="form-title"
            aria-describedby="form-instructions"
            noValidate
        >
            <h2 id="form-title" className="text-2xl font-bold text-gray-800">
                User Registration
            </h2>
            
            <p id="form-instructions" className="sr-only">
                Please fill in all required fields. Use the Enter key to move between fields.
            </p>
            
            <div className="flex flex-col gap-6" role="group" aria-labelledby="form-fields">
                <p id="form-fields" className="sr-only">Form fields</p>
                
                <Select
                    label="Type of user"
                    options={[
                        { value: 'teacher', label: 'Teacher' },
                        { value: 'student', label: 'Student' }
                    ]}
                    id="userType"
                    name="userType"
                    placeholder='Select an option'
                    value={formData.userType}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.userType}
                    aria-describedby={errors.userType ? "userType-error" : undefined}
                    helperText={errors.userType}
                    style={errors.userType ? "error" : 'default'}
                    state='required'
                />

                <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    state='required'
                    placeholder='Enter you username'
                    onChange={handleChange}
                    label="Username"
                    aria-required="true"
                    aria-invalid={!!errors.username}
                    aria-describedby={errors.username ? "username-error" : undefined}
                    helperText={errors.username}
                    style={errors.username ? "error" : 'default'}
                />

                <InputPassword
                    id="password"
                    name="password"
                    state='required'
                    placeholder='Enter your password'
                    value={formData.password}
                    onChange={handleChange}
                    label="Password"
                    aria-required="true"
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    helperText={errors.password}
                    style={errors.password ? "error" : 'default'}
                />

                <Input
                    id="description"
                    name="description"
                    value={formData.description}
                    state='optional'
                    placeholder='Tell us about yourself to get to know you...'
                    onChange={handleChange}
                    label="Description about you"
                    aria-required="true"
                    type='area'
                />
            </div>

            <Button
                type="submit"
                appearance="primary"
                style="filled"
                className="mt-4"
                aria-label="Submit registration form"
                aria-live="polite"
            >
                Register
            </Button>
        </form>
    );
};

export default FormExample;