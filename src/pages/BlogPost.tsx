import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import { User, Clock, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useBlogContext();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  
  useEffect(() => {
    if (id && posts.length > 0) {
      const currentPost = posts.find(post => post.id === parseInt(id));
      setPost(currentPost || null);
      
      if (currentPost) {
        // Find related posts (same category, excluding current post)
        const related = posts
          .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
  }, [id, posts]);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <p className="text-gray-400 mb-6">The post you are looking for does not exist or has been removed.</p>
          <Link to="/" className="cyber-button">
            RETURN HOME
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-[#0ff] mb-8">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to posts
      </Link>
      
      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <span className="blog-tag">{post.category}</span>
          {post.tags?.map((tag, index) => (
            <span key={index} className="text-xs text-gray-400">#{tag}</span>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex items-center text-gray-400 text-sm mb-6">
          <div className="flex items-center mr-6">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="mb-10 cyber-border">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Post Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8 prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-[#0ff]/20">
              <div className="flex items-center flex-wrap">
                <Tag className="h-4 w-4 text-gray-400 mr-2" />
                {post.tags.map((tag, index) => (
                  <span key={index} className="mr-2 mb-2 text-sm text-gray-400 hover:text-[#0ff]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Author Bio */}
          <div className="mt-12 pt-6 border-t border-[#0ff]/20">
            <div className="flex items-start space-x-4">
              <img 
                src={post.authorImage || "https://via.placeholder.com/80"} 
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover cyber-border"
              />
              <div>
                <h4 className="text-lg font-bold mb-2">{post.author}</h4>
                <p className="text-gray-400 text-sm">
                  Senior contributor to GHOST.LOG, specializing in the philosophical implications of advanced technology and the evolving relationship between humans and machines.
                </p>
              </div>
            </div>
          </div>
        </article>
        
        {/* Sidebar */}
        <aside className="lg:col-span-4">
          {/* Related Posts */}
          <div className="cyber-border p-6 bg-[#080808] mb-8">
            <h3 className="text-xl font-bold mb-4 border-b border-[#0ff]/20 pb-2">Related Posts</h3>
            {relatedPosts.length > 0 ? (
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex space-x-3">
                    <div className="flex-shrink-0 w-20 h-20 overflow-hidden">
                      <img 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Link 
                        to={`/post/${relatedPost.id}`} 
                        className="text-sm font-medium hover-glow"
                      >
                        {relatedPost.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No related posts found.</p>
            )}
          </div>
          
          {/* Categories */}
          <div className="cyber-border p-6 bg-[#080808] mb-8">
            <h3 className="text-xl font-bold mb-4 border-b border-[#0ff]/20 pb-2">Categories</h3>
            <div className="space-y-2">
              <Link to="/?category=cybernetics" className="block text-gray-400 hover:text-[#0ff]">
                Cybernetics
              </Link>
              <Link to="/?category=ai" className="block text-gray-400 hover:text-[#0ff]">
                Artificial Intelligence
              </Link>
              <Link to="/?category=cyberspace" className="block text-gray-400 hover:text-[#0ff]">
                Cyberspace
              </Link>
              <Link to="/?category=security" className="block text-gray-400 hover:text-[#0ff]">
                Security
              </Link>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="cyber-border p-6 bg-[#080808]">
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest posts delivered directly to your inbox.
            </p>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-black border border-[#0ff]/30 text-white px-3 py-2 mb-3 focus:outline-none focus:border-[#0ff]"
            />
            <button className="cyber-button w-full">
              SUBSCRIBE
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;