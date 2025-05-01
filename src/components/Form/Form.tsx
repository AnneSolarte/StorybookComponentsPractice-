import React, { useState } from 'react';
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
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        setFormData({
            userType: '',
            username: '',
            password: '',
        })
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-1/3 mx-auto p-6 bg-white rounded-lg shadow-md gap-6 ">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">User Form</h2>
            
            <div className="mb-4 flex flex-col gap-6">
                <Select
                    label="Type of user"
                    options={[
                        { value: 'teacher', label: 'Teacher' },
                        { value: 'student', label: 'Student' }
                    ]}
                    id='userType'
                    value={formData.userType}
                    onChange={handleChange}
                />

                <Input
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    label="Username"
                />

                <InputPassword
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    label="Password"
                />
            </div>

            <Button
                type='submit'
                appearance="primary"
                style="filled"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </form>
    );
};

export default FormExample;