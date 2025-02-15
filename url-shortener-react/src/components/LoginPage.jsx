import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

// const LoginPage = () => {
//     const navigate = useNavigate();
//     const [loader, setLoader] = useState(false);
//     const { setToken } = useStoreContext();

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: {errors}
//     } = useForm({
//         defaultValues: {
//             username: "",
//             email: "",
//             password: "",
//         },
//         mode: "onTouched",
//     });

//     const loginHandler = async (data) => {
//         setLoader(true);
//         try {
//             const { data: response } = await api.post(
//                 "/api/auth/public/login",
//                 data
//             );
//             // console.log(response.token);
//             setToken(response.token);
//             localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
//             toast.success("Login Successful!");
//             reset();
//             navigate("/dashboard");
//         } catch (error) {
//             console.log(error);
//             toast.error("Login Failed!")
//         } finally {
//             setLoader(false);
//         }
//     };

//   return (
//     <div
//         className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
//         <form onSubmit={handleSubmit(loginHandler)}
//             className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md">
//             <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
//                 Login Here
//             </h1>

//             <hr className='mt-2 mb-5 text-black'/>

//             <div className="flex flex-col gap-3">
//                 <TextField
//                     label="UserName"
//                     required
//                     id="username"
//                     type="text"
//                     message="*Username is required"
//                     placeholder="Type your username"
//                     register={register}
//                     errors={errors}
//                 />

//                 <TextField
//                     label="Password"
//                     required
//                     id="password"
//                     type="password"
//                     message="*Password is required"
//                     placeholder="Type your password"
//                     register={register}
//                     min={6}
//                     errors={errors}
//                 />
//             </div>

//             <button
//                 disabled={loader}
//                 type='submit'
//                 className='bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3'>
//                 {loader ? "Loading..." : "Login"}
//             </button>

//             <p className='text-center text-sm text-slate-700 mt-6'>
//                 Don't have an account? 
//                 <Link
//                     className='font-semibold underline hover:text-black'
//                     to="/register">
//                         <span className='text-btnColor'> SignUp</span>
//                 </Link>
//             </p>
//         </form>
//     </div>
//   )
// }

// export default LoginPage


const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

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

    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );
            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
            toast.success("Login Successful!");
            reset();
            navigate("/dashboard");
        } catch (error) {
            toast.error("Login Failed!");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] p-8 rounded-lg shadow-lg"
            >
                <h1 className="text-xl font-bold text-left text-gray-900">
                    Log in to your account
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
                    {loader ? "Loading..." : "Login"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <Link className="text-gray-500 hover:text-black" to="/register">
                        <span className="font-semibold">SignUp</span>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;