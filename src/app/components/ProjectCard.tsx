import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  onClick?: () => void;
}

export function ProjectCard({ title, category, description, image, tags, onClick }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2">
              <span className="text-sm">Ver proyecto completo</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-sm text-orange-600">{category}</span>
        </div>
        
        <h3 className="text-2xl text-gray-900 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}