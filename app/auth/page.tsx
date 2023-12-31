'use client'
import Image from 'next/image'
import Input from '../components/Input'
import {  useState } from 'react'
import { signIn } from 'next-auth/react'
import {FcGoogle} from 'react-icons/fc'
import {FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const Auth  = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const [isSignIn, setSignIn] = useState(true)

    const signInHandler = () => {
        setSignIn(!isSignIn)
    }

    const onEmailChange = (e:any) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e:any) => {
        setPassword(e.target.value)
    }
    const onNameChange = (e:any) => {
        setName(e.target.value)
    }

    

    return (
        <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed h-full ">
            <div className=" h-full w-full lg:bg-opacity-50 bg-black ">
                <nav className=' px-12 py-5'>
                    <Image className='' src='/images/logo.png' alt={''} width={100} height={100}  />
                </nav>
                <div className='flex justify-center'>
                    <div className=' bg-black bg-opacity-70 px-12 py-16 self-center mt-2 lg:max-w-md rounded-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold' >
                            {isSignIn ? 'Sign In' : 'Register'}
                        </h2>
                        <div className=' flex flex-col gap-4 pb-4'>
                            { !signIn && (<Input label='Username' onChange={onNameChange}  value={name} id='name'/>)}
                            <Input label='Email' onChange={onEmailChange} type='email' value={email} id='email'/>
                            <Input label='Password' onChange={onPasswordChange} type='password' value={password} id='password'/>
                        </div>
                        <button  className=' bg-red-500 hover:bg-red-700 transition py-3 text-white rounded-md w-full'>
                            {isSignIn ? 'Login' : 'Register'}
                        </button>
                        <div className='flex flex-row items-center gap-5 mt-8 justify-center'>
                            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                                <FcGoogle size={30} />
                            </div>
                            <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                                <FaGithub  size={30} />
                            </div>
                        </div>
                        <p className=' text-zinc-500 mt-12'>
                            First time using Netflix?
                            <span onClick={signInHandler} className='ml-1 text-white hover:underline'>
                                {isSignIn ? 'Create an Account' : 'Already have an account?'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth