interface StaticItemProps {
    imageUrl: string;
    containerClass?: string;
  }
  
  const StaticItem: React.FC<StaticItemProps> = ({ imageUrl, containerClass='h-full w-full' }) => {
    return (
      <div className={`${containerClass}`}>
        <img src={imageUrl} alt="Banner" className="object-cover h-full w-full" />
      </div>
    );
  };
  
  export default StaticItem;
