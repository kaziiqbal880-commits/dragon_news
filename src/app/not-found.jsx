import Link from 'next/link';
import React from 'react';

const NotfoundPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-indigo-50 px-6">
            <div className="text-center max-w-lg">

                {/* 404 */}
                <h1 className="text-[140px] md:text-[180px] font-black leading-none tracking-tighter bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                    It may have been moved or no longer exists.
                </p>

                {/* Home Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all duration-200"
                >
                    <span className="text-lg">←</span>
                    Return to Home
                </Link>
                {/* Error Code */}
                <p className="mt-8 text-sm text-slate-400">
                    Error code: 404
                </p>

            </div>
        </main>

    );
};

export default NotfoundPage;