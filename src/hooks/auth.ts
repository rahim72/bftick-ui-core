
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

interface UseAuthOptions {
    middleware?: string;
    redirectIfAuthenticated?: any;
}

interface Errors {
    // define the structure of errors object here
}

interface RegisterProps {
    setErrors: (errors: any[]) => void;
}

interface LoginProps {
    setErrors: (errors: any[]) => void;
    setStatus: (status: any | null) => void;
}

interface LoginOtpProps {
    setErrors: (errors: any[]) => void;
    setStatus: (status: any | null) => void;
}

interface ForgotPasswordProps {
    setErrors: (errors: any[]) => void;
    setStatus: (status: any | null) => void;
    email: string |any;
}

interface ResetPasswordProps {
    setErrors: (errors: any[]) => void;
    setStatus: (status: any | null) => void;
}

interface ResendEmailVerificationInterface {
    setStatus: (status: any | null) => void;
}

export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthOptions= {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                // router.push('/api/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }: RegisterProps): Promise<void>  => {
        await csrf();

        setErrors([])

        axios
            .post('/api/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
        
    }

    const registerOtp = async ({ setErrors, ...props }: any): Promise<void>  => {
        await csrf();
        setErrors([])
        axios
            .post('/api/otp-request', props)
            .then((response) => {
                mutate();
                if(response.data.status === 'success'){
                    router.push('/verify-otp')
                }
            } )
            .catch(error => {
                // if (error.response.status !== 422) throw error
console.log(error);
                // setErrors(error.response.data.errors)
            })     
    }

    const VerifyOtp = async ({ setErrors, ...props }: any): Promise<void>  => {
        await csrf();

        setErrors([])

        axios
            .post('/api/verify', props)
            .then((response) => 
            {
                mutate()
                console.log(response);
                if(response.data.message === 'success'){
                    router.push('/')
                }
                
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
        
    }

    const login = async ({ setErrors, setStatus, ...props }: LoginProps): Promise<void> => {
        await csrf();

        setErrors([])
        setStatus(null)

        axios
            .post('/api/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const loginOtp = async ({ setErrors, setStatus, ...props }: LoginOtpProps): Promise<void> => {
        await csrf();

        setErrors([])
        setStatus(null)

        axios
            .post('/api/login-otp', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })

        revalidatePath('/') // Update cached posts
        redirect(`/`) // Navigate to the new post page
    }

    const forgotPassword = async ({ setErrors, setStatus, email }:ForgotPasswordProps): Promise<void> => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/api/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }:ResetPasswordProps): Promise<void> => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/api/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }:ResendEmailVerificationInterface) => {
        axios
            .post('/api/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/api/logout').then(() => mutate())
        }

        window.location.pathname = '/login-otp'
    }



    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/api/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        loginOtp,
        registerOtp,
        VerifyOtp
    }
}
