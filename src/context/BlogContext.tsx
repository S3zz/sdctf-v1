import React, { createContext, useContext, ReactNode } from 'react';
import { BlogPost } from '../types';
import samplePosts from '../data/posts';

interface BlogContextType {
  posts: BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const posts = samplePosts;
  
  return (
    <BlogContext.Provider value={{ posts }}>
      {children}
    </BlogContext.Provider>
  );
};