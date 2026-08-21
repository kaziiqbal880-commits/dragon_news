import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import News from '@/components/homepage/news/News';
import RightsideBar from '@/components/homepage/news/RightsideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsId = async ({ params }) => {
    const { id } = await params;


    const categories = await getCategories()
    const news = await getNewsByCategoryId(id)
    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-4 ">
            {/* left sidebar */}
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
            </div>

            {/* News section */}
            <div className="col-span-6">
                <h1 className="font-bold text-md mb-2">News By Category</h1>
                <div className="bg-base-200 p-3 rounded-md shadow">
                    {
                        (news.length > 0) ? (news.map(n => <News key={n._id} n={n}> </News>

                        )) : <h1 className='flex justify-center items-center text-center font-bold text-2xl bg-gray-200 h-62.5'>No News Found!! Try Other Catergory!!</h1>
                    }
                </div>
            </div>

            {/* right sideBar */}
            <div className="col-span-3">
                <RightsideBar></RightsideBar>
            </div>
        </div>
    );
};

export default NewsId;