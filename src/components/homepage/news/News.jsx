import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const News = ({ n }) => {
    return (
        <div className='mb-2'>
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
                    <p className='line-clamp-3'>{n.details}</p>
                    <Link href={`/details/${n._id}`}><button className='text-red-400 btn'>Read more...</button></Link>
                    <div className="divider"></div>
                    <div className='flex justify-between items-center'>
                        <span className='flex gap-2 items-center'><FaStar className='text-yellow-400' />{n.rating.number}</span>
                        <span className='flex gap-2 items-center'><FaEye />{n.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;