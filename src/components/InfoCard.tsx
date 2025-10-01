interface InfoCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  className?: string;
}

export function InfoCard({ title, description, backgroundImage, className = '' }: InfoCardProps) {
  const style = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <article 
      style={style} 
      className={`relative bg-cover bg-center rounded-2xl text-white overflow-hidden h-96 flex flex-col justify-end p-8 ${className}`}
    >
     
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-lg">{description}</p>
      </div>
    </article>
  );
}