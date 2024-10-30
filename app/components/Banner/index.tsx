import Image from 'next/image';

const Banner = () => {

    return (
        <div className='bg-header'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-12 flex justify-center pt-10 lg:pt-0'>
                        {/* <Image src="/assets/banner/star.svg" alt="star-image" width={95} height={97} className='absolute top-[74px] right-[25px]' />
                        <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[74px] right-[25px]' /> */}
                        {/* <h1 className='text-midnightblue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'>Put an end to unpaid invoices.</h1> */}
                        <Image src="/assets/images/poha2.jpg" alt="nothing" width={1000} height={805} />
                    </div>

                    <div className='col-span-12 flex flex-col justify-evenly relative'>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                        <div className='pt-8 mx-auto lg:mx-0'>
                            <button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner;
