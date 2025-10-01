interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#f0f0f0] rounded-lg shadow-sm p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold text-texto-principal">
        {number} {title}
      </h3>
      <p className="text-texto-secundario mt-2 flex-grow">
        {description}
      </p>
    </div>
  );
}