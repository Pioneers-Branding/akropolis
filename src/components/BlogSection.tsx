import React from 'react';
import { Calendar, Clock, ArrowRight, Tag, TrendingUp } from 'lucide-react';
import { blogPosts } from '../data/blog';

const BlogSection: React.FC = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health Tips':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'News':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Medical Updates':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#328CCB]/10 text-[#328CCB] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            <span>Health Resources</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Health <span className="text-[#328CCB]">Insights</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert health advice, medical breakthroughs, and hospital updates 
            from our team of healthcare professionals.
          </p>
        </div>

        {/* Featured Post + Regular Posts Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <article className="lg:row-span-2 group cursor-pointer">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>

                <button className="bg-[#328CCB] hover:bg-[#2a7bb5] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-[#2a7bb5] w-fit mx-auto">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </article>

          {/* Regular Posts */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex">
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 p-6">
                    
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[#328CCB] group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
              window.location.reload();
            }}
            className="bg-[#D66C43] hover:bg-[#c55a36] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit mx-auto shadow-lg"
          >
            <span>Contact Us for More Info</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;