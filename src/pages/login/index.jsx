import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Formik } from "formik"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { login } from "../../store/slices/auth/slices"
import { loginValidationSchema } from "../../store/slices/auth/validation"
import logo from "../../assets/logo2.png"

function LoginPage () {
    // @hooks
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const { id, loading } = useSelector(state => {
        return {
            id : state.auth?.id,
            loading : state.auth?.isLoginLoading
        }
    })

    const eye = <AiFillEye />;
    const eyeInvisible = <AiFillEyeInvisible />;
    const [passwordShown, setPasswordShown] = useState({value : false, field_name : ""});

    // @redirect
    if (id) {
        return <Navigate to="/" replace/>
    }

    return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    onClick={() => navigate("/")}
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white cursor-pointer"
                >
                    <img
                    className="w-8 h-8 mr-2"
                    src={logo}
                    alt="logo"
                    />
                    Attend App
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <Formik 
                        initialValues={{ email : "", password: "" }}
                        validate={values => {
                            try {
                                loginValidationSchema.validateSync(values)
                                return {}
                            } catch (error) {
                                console.log("error", error?.message)
                                return { message : error?.message }
                            }
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            dispatch(login(values))
                            setSubmitting(false)
                        }}
                        >
                        {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                    placeholder="email"
                                    value={values.email} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                                </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                < div className="relative">
                                <input
                                    type={passwordShown.value && passwordShown.field_name === "password" ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <button type="button"
                                    onClick={()=>{
                                    setPasswordShown({value : !passwordShown.value, field_name : "password"})
                                    }}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
                                    {passwordShown.value && passwordShown.field_name === "password" ? eye : eyeInvisible}
                                </button>
                                </div>
                                {
                                    errors.message && (
                                        <div className="mt-6 mb-4">
                                            <div
                                            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                            role="alert"
                                            >
                                                <span className="font-medium">{ errors.message }</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                {/* <a
                                    onClick={() => navigate("/forgot-password")}
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                                >
                                    Forgot password?
                                </a> */}
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                disabled={isSubmitting || loading}
                            >
                                
                                { (isSubmitting || loading) && (
                                    <button disabled type="button" class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 inline-flex items-center">
                                        <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg>
                                    </button>
                                    )
                                }
                                Sign in
                            </button>
                        </form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
    )  
}

export default LoginPage