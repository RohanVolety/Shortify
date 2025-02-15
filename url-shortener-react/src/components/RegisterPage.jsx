import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';


const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/register",
                data
            );
            reset();
            navigate("/login");
            toast.success("Registration Successful!");
        } catch (error) {
            toast.error("Registration Failed!");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]  p-8 rounded-lg shadow-lg"
            >
                <h1 className="text-xl font-bold text-left text-gray-900">
                    Register Here
                </h1>

                <div className="flex flex-col gap-3 w-full">
                    <TextField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="*Email is required"
                        placeholder="Enter your email"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Enter your password"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                <button
                    disabled={loader}
                    type="submit"
                    className="w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                >
                    {loader ? "Loading..." : "Register"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link className="text-gray-500 hover:text-black" to="/login">
                        <span className="font-semibold">Login</span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;