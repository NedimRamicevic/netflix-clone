import Image from 'next/image'

const Auth  = () => {
    return (
        <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed h-full ">
            <div className=" h-full w-full lg:bg-opacity-50 bg-black ">
                <nav className=' px-12 py-5'>
                    <Image className='' src='/images/logo.png' alt={''} width={100} height={100}  />
                </nav>
            </div>
        </div>
    )
}

export default Auth