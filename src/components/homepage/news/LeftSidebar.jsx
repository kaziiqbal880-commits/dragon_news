import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h1 className="font-bold text-md">All Categories</h1>
            <div className="pt-1">
                <ul className="flex flex-col gap-1">
                    {
                        categories.news_category.map(category => (
                            <li className={`font-semibold p-2 text-center ${activeId == category.category_id && "bg-slate-300 rounded-md"}`} key={category.category_id}>
                                <Link className='block ' href={`/category/${category.category_id}`}>{category.category_name}</Link>

                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
};

export default LeftSidebar;