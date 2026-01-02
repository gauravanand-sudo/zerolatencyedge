export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ZeroLatencyEdge
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            High-performance C++ Programming Blog
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/blog" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              📚 Read Blog
            </a>
            <a href="/videos" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition">
              🎥 Watch Videos
            </a>
          </div>
        </div>
        
        {/* Latest Content */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Latest Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2">Effective Modern C++</h3>
              <p className="text-gray-400">Scott Meyers book summaries and insights</p>
              <a href="/blog/scott-meyers" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
                Read Summaries →
              </a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2">Concurrency in Action</h3>
              <p className="text-gray-400">Mastering C++ multithreading and parallelism</p>
              <a href="/blog/concurrency" className="inline-block mt-4 text-purple-400 hover:text-purple-300">
                Learn Concurrency →
              </a>
            </div>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">📖 Featured Sections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/blog/scott-meyers" className="p-4 bg-blue-900/20 rounded-xl border border-blue-800/50 hover:border-blue-500">
              <h3 className="font-bold mb-2">Scott Meyers</h3>
              <p className="text-sm text-gray-400">Effective C++ series</p>
            </a>
            <a href="/blog/concurrency" className="p-4 bg-purple-900/20 rounded-xl border border-purple-800/50 hover:border-purple-500">
              <h3 className="font-bold mb-2">Concurrency</h3>
              <p className="text-sm text-gray-400">Multithreading guide</p>
            </a>
            <a href="/blog/system-design" className="p-4 bg-orange-900/20 rounded-xl border border-orange-800/50 hover:border-orange-500">
              <h3 className="font-bold mb-2">System Design</h3>
              <p className="text-sm text-gray-400">Fedor Picker principles</p>
            </a>
            <a href="/blog/interviews" className="p-4 bg-green-900/20 rounded-xl border border-green-800/50 hover:border-green-500">
              <h3 className="font-bold mb-2">Interviews</h3>
              <p className="text-sm text-gray-400">Jane Street/Adobe prep</p>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Start Your C++ Journey</h3>
            <p className="text-gray-400 mb-6">Join the ZeroLatencyEdge community for high-performance C++ content</p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://youtube.com/@ZeroLatencyEdge" 
                target="_blank"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
              >
                🎥 YouTube
              </a>
              <a 
                href="/blog" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
              >
                📚 Read Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
