interface StaticItemProps {
    imageUrl: string;
  }
  
  const StaticItem: React.FC<StaticItemProps> = ({ imageUrl }) => {
    return (
      <div className="h-full w-full">
        <img src={imageUrl} alt="Banner" className="object-cover h-full w-full" />
      </div>
    );
  };
  
  export default StaticItem;
