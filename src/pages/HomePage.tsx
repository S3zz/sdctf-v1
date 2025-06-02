import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { useBlogContext } from '../context/BlogContext';
import { Search, Filter } from 'lucide-react';
import { BlogPost } from '../types';

const HomePage: React.FC = () => {
  const { posts } = useBlogContext();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const location = useLocation();
  
  useEffect(() => {
    // Get category from URL if present
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('all');
    }
  }, [location]);
  
  useEffect(() => {
    let filtered = [...posts];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  }, [posts, activeCategory, searchTerm]);
  
  const featuredPost = posts.find(post => post.featured);
  
  const categories = ['all', ...new Set(posts.map(post => post.category.toLowerCase()))];
  
  return (
    <div className="container mx-auto px-4 pt-24">
      {/* Hero Section */}
      <section className="mb-16">
        {featuredPost && <BlogCard post={featuredPost} featured={true} />}
      </section>
      
      {/* Search & Filter */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-[#080808] border border-[#0ff]/30 text-white py-2 pl-10 pr-4 focus:outline-none focus:border-[#0ff]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          <div className="flex items-center space-x-1 overflow-x-auto pb-2 w-full md:w-auto">
            <Filter className="h-4 w-4 text-gray-400 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1 text-xs uppercase tracking-wider whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-[#0ff]/10 text-[#0ff] border border-[#0ff]'
                    : 'text-gray-400 border border-gray-700 hover:border-[#0ff]/50'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-8 inline-block border-b-2 border-[#0ff] pb-2">
          {activeCategory === 'all' ? 'Latest Posts' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Posts`}
        </h2>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No posts found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
      
      {/* Newsletter Section */}
      <section className="mt-20 cyber-border p-8 bg-[#080808]">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Join the Network</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to receive the latest cyberpunk insights and updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-black border border-[#0ff]/30 text-white px-4 py-2 focus:outline-none focus:border-[#0ff]"
            />
            <button className="cyber-button">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;