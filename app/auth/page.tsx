import Image from 'next/image'
import Input from '../components/Input'

const Auth  = () => {
    return (
        <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed h-full ">
            <div className=" h-full w-full lg:bg-opacity-50 bg-black ">
                <nav className=' px-12 py-5'>
                    <Image className='' src='/images/logo.png' alt={''} width={100} height={100}  />
                </nav>
                <div className='flex justify-center'>
                    <div className=' bg-black bg-opacity-70 px-12 py-16 self-center mt-2 lg:max-w-md rounded-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold' >
                            Sign In
                        </h2>
                        <div className=' flex flex-col gap-4'>
                            <Input/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth