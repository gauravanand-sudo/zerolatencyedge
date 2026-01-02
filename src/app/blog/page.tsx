export default function BlogPage() {
  const categories = [
    {
      title: "📚 Scott Meyers - Effective C++ Series",
      description: "Complete breakdown of Effective Modern C++, Effective STL, and More Effective C++",
      link: "/blog/scott-meyers",
      color: "from-blue-500 to-cyan-500",
      count: "14 Items"
    },
    {
      title: "⚡ Concurrency in Action",
      description: "Mastering multithreading, parallel programming, and lock-free data structures in C++",
      link: "/blog/concurrency",
      color: "from-purple-500 to-pink-500",
      count: "12 Chapters"
    },
    {
      title: "🏗️ C++ System Design - Fedor Picker",
      description: "Low-latency system design patterns, microservices, and distributed systems in C++",
      link: "/blog/system-design",
      color: "from-orange-500 to-red-500",
      count: "8 Topics"
    },
    {
      title: "💼 Cracking Jane Street/Adobe Interviews",
      description: "Must-read books and resources for quant trading and FAANG interviews",
      link: "/blog/interviews",
      color: "from-green-500 to-emerald-500",
      count: "5 Books"
    },
    {
      title: "🔥 Must-Read C++ Books",
      description: "Essential reading list from beginner to expert level C++ programming",
      link: "/books",
      color: "from-yellow-500 to-amber-500",
      count: "10+ Books"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
            ← Back to Home
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              C++ Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Technical deep dives, book summaries, and interview preparation
          </p>
        </div>

        {/* Main Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 transition-all hover:scale-[1.02] hover:border-gray-600"
            >
              <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm px-3 py-1 bg-gray-800 rounded-full">
                    {category.count}
                  </span>
                  <span className="text-blue-400 group-hover:text-blue-300">
                    Explore →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6">🚀 Quick Start Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/blog/scott-meyers/item-1" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800">
              <h4 className="font-bold mb-2">Scott Meyers: Item 1</h4>
              <p className="text-sm text-gray-400">Template Type Deduction</p>
            </a>
            <a href="/blog/concurrency/chapter-1" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800">
              <h4 className="font-bold mb-2">Concurrency: Chapter 1</h4>
              <p className="text-sm text-gray-400">Hello, World of Threads</p>
            </a>
            <a href="/blog/system-design/patterns" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800">
              <h4 className="font-bold mb-2">System Design Patterns</h4>
              <p className="text-sm text-gray-400">Reactor, Proactor, Observer</p>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Subscribe for Updates</h3>
            <p className="text-gray-400 mb-6">Get notified about new C++ content and book summaries</p>
            <div className="flex gap-4">
              <a 
                href="https://youtube.com/@ZeroLatencyEdge" 
                target="_blank"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
              >
                🎥 YouTube
              </a>
              <a 
                href="https://github.com/gauravanand-sudo/zerolatencyedge" 
                target="_blank"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
