import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <div className="featured-post relative rounded overflow-hidden group transition-all duration-300 h-[500px]">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
          <div className="flex items-center space-x-2 mb-3">
            <span className="blog-tag">Featured</span>
            <span className="blog-tag">{post.category}</span>
          </div>
          <Link to={`/post/${post.id}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white hover-glow mb-3">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center text-gray-400 text-sm">
            <div className="flex items-center mr-4">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
          <Link 
            to={`/post/${post.id}`} 
            className="mt-4 inline-block cyber-button"
          >
            READ MORE
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="blog-card cyber-border bg-[#080808] rounded overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <span className="blog-tag">{post.category}</span>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <Link to={`/post/${post.id}`}>
          <h3 className="text-xl font-bold hover-glow text-white mb-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <div className="flex items-center text-gray-500 text-xs mb-2">
          <div className="flex items-center mr-3">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
        <Link 
          to={`/post/${post.id}`} 
          className="inline-block text-[#0ff] text-sm border-b border-transparent hover:border-[#0ff] transition-colors"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;