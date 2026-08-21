import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightsideBar from '@/components/homepage/news/RightsideBar';
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
    const { id } = await params
    const news = await getNewsDetailsById(id)
    return {
        title: news.title,
        description: news.details
    }


}

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const n = await getNewsDetailsById(id)
    console.log(n)
    return <div className='container mx-auto grid grid-cols-12'>
        <div className='mb-2 col-span-9'>
            <div className="card bg-base-100 shadow-sm ">
                <div className=" card-body">
                    <div className='flex justify-between items-center bg-slate-200 p-5 '>
                        <div className='flex gap-2'>
                            <Image className='rounded-full'
                                alt='n.author.name'
                                width={40}
                                height={40}
                                src={n.author.img} />
                            <div>
                                <h2 className="font-bold">{n.author.name} </h2>
                                <p>{n.author.published_date}</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <CiShare2 className='text-lg' />
                            <CiBookmark className='text-lg' />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>{n.title}</h1>
                    <figure>
                        <Image className='w-full'
                            alt={n.title}
                            width={300}
                            height={300}
                            src={n.image_url}
                            unoptimized
                        />
                    </figure>
                    <p className=''>{n.details}</p>
                    <Link href={`/category/${n.category_id}`}><button className='text-red-400 btn'>Click for same category...</button></Link>
                    <div className="divider"></div>
                    <div className='flex justify-between items-center'>
                        <span className='flex gap-2 items-center'><FaStar className='text-yellow-400' />{n.rating.number}</span>
                        <span className='flex gap-2 items-center'><FaEye />{n.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-3'>
            <RightsideBar></RightsideBar>

        </div>
    </div>

};

export default DetailsPage;