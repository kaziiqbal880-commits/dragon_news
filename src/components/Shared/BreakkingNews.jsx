import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakkingNews = () => {
    const breakingNews = [
        {
            id: 1,
            headline: "Global Markets Rally as Investors React to Latest Economic Data!",
        },
        {
            id: 2,
            headline: "Major Technology Companies Announce New AI Innovations!",
        },
        {
            id: 3,
            headline: "Severe Weather Alerts Issued Across Several Regions!",
        },
        {
            id: 4,
            headline: "World Leaders Gather for High-Level International Summit!",
        },
    ];
    return (
        <div className='sticky top-0 z-50  flex items-center px-2 my-5 bg-gray-200 container mx-auto'>
            <button className='btn bg-red-500 text-white px-4'>Latest</button>
            <Marquee pauseOnHover={true} className='py-4 '>
                <div>
                    {
                        breakingNews.map(news =>
                            <span className='pr-5' key={news.id}> {news.headline} </span>
                        )
                    }
                </div>
            </Marquee>
        </div >


    );
};

export default BreakkingNews;