import React from 'react';

interface CollectionProps {
    containerClass?: string,
    imageUrl: string;
    title?: string,
    description?: string,
}

const CollectionCard: React.FC<CollectionProps> = ({ containerClass = 'flex-col', imageUrl, title, description }) => {
    return (

        <div className={`group flex-1 flex ${containerClass}`}>
            <div className='flex mx-auto flex-col relative '>
                <div className='flex'>
                    <img src={imageUrl} />
                </div>

                <div className='absolute w-full h-full group-hover:bg-white/10 transition-all duration-300' />

                <div className="absolute bottom-0 right-0 mb-6 mr-5 overflow-hidden p-2">
                    <div className="bg-white flex items-center justify-center text-black shadow-md rounded cursor-pointer py-4 px-5 translate-y-16 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        View Collection
                    </div>
                </div>
            </div>

            <div className='h-full flex flex-col relative justify-center items-center'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-center pt-3 px-10 text-sm leading-loose'>{description}</p>
            </div>

        </div>

    );
};

export default CollectionCard;
