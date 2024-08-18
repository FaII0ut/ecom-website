import CollectionCard from '@/components/cards/CollectionCard';
import React from 'react';

interface CollectionProps {
    // Define any props you expect the Collection component to receive here
}

const Collection: React.FC<CollectionProps> = () => {
    return (
        <div className="h-[65vh] flex mx-auto container gap-6 mb-10">

            <CollectionCard imageUrl='https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F1.jpg&w=640&q=75' title='New Spring Kits' description="Endlessly versatile new styles that say yes to spring. The season's looking bright."/>
            <CollectionCard imageUrl='https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F2.jpg&w=640&q=75' title='New Spring Kits' description="Endlessly versatile new styles that say yes to spring. The season's looking bright." containerClass='flex-col-reverse'/>
            <CollectionCard imageUrl='https://chawkbazar.redq.io/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F3.jpg&w=640&q=75' title='New Spring Kits' description="Endlessly versatile new styles that say yes to spring. The season's looking bright." />



        </div>
    );
};

export default Collection;
