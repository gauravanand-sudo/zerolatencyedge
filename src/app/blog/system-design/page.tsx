export default function SystemDesignPage() {
  const topics = [
    { id: 1, title: "Low-Latency Architecture Patterns", category: "Architecture" },
    { id: 2, title: "Microservices in C++", category: "Services" },
    { id: 3, title: "Distributed Systems Design", category: "Distributed" },
    { id: 4, title: "Reactor and Proactor Patterns", category: "Patterns" },
    { id: 5, title: "Memory Pool Design", category: "Performance" },
    { id: 6, title: "Lock-Free Data Structures", category: "Concurrency" },
    { id: 7, title: "Real-time Systems", category: "Real-time" },
    { id: 8, title: "Fault Tolerance Patterns", category: "Reliability" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          ← Back to Blog
        </a>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">🏗️ C++ System Design</h1>
          <p className="text-gray-300">
            Building scalable, low-latency systems with C++. Based on Fedor Picker's principles 
            and real-world high-performance system designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <a
              key={topic.id}
              href={`/blog/system-design/${topic.id}`}
              className="block p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-orange-500 hover:bg-gray-900 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  {topic.category}
                </span>
                <span className="text-2xl">→</span>
              </div>
              <h3 className="text-xl font-bold">{topic.title}</h3>
              <p className="text-gray-400 mt-2">
                Deep dive into {topic.title.toLowerCase()} with code examples
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800">
          <h3 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Fedor Picker's Principles
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-bold mb-2">1. Performance First</h4>
                <p className="text-sm text-gray-400">Design for low latency from the start</p>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-bold mb-2">2. Minimal Abstraction</h4>
                <p className="text-sm text-gray-400">Avoid unnecessary layers in critical paths</p>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-bold mb-2">3. Memory Locality</h4>
                <p className="text-sm text-gray-400">Optimize cache usage and data layout</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-bold mb-2">4. Lock-Free Where Possible</h4>
                <p className="text-sm text-gray-400">Use atomics and lock-free data structures</p>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-bold mb-2">5. Measure Everything</h4>
                <p className="text-sm text-gray-400">Instrument and profile continuously</p>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-bold mb-2">6. Design for Scale</h4>
                <p className="text-sm text-gray-400">Horizontal scalability from day one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
