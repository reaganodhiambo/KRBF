import { Clock, User, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Thunder Rollers Secure Championship Lead',
      excerpt: 'With a stunning 4-2 victory over Lightning Bolts, Thunder Rollers extend their lead at the top of the table.',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      readTime: '3 min read',
      category: 'Match Report',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'New Rollball Academy Opens Next Month',
      excerpt: 'The federation announces the opening of a state-of-the-art training facility to nurture young talent.',
      author: 'Mike Chen',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'Academy News',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Player Transfer Window Updates',
      excerpt: 'Several high-profile transfers shake up the league as teams prepare for the final stretch of the season.',
      author: 'Emma Davis',
      date: '2025-01-05',
      readTime: '4 min read',
      category: 'Transfers',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Championship Finals Venue Announced',
      excerpt: 'The grand finale will take place at the newly renovated National Sports Stadium with enhanced facilities.',
      author: 'David Wilson',
      date: '2025-01-03',
      readTime: '2 min read',
      category: 'Championship',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Match Report': return 'bg-green-100 text-green-800';
      case 'Academy News': return 'bg-blue-100 text-blue-800';
      case 'Transfers': return 'bg-purple-100 text-purple-800';
      case 'Championship': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="news" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Latest <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings in the world of rollball.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>

                {/* Read More Button */}
                <button className="group flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;