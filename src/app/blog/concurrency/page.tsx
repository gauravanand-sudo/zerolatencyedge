export default function ConcurrencyPage() {
  const chapters = [
    { number: 1, title: "Hello, World of Concurrency in C++", status: "✅ Completed" },
    { number: 2, title: "Managing Threads", status: "📝 In Progress" },
    { number: 3, title: "Sharing Data Between Threads", status: "⏳ Coming Soon" },
    { number: 4, title: "Synchronizing Concurrent Operations", status: "⏳ Coming Soon" },
    { number: 5, title: "The C++ Memory Model and Operations on Atomic Types", status: "⏳ Coming Soon" },
    { number: 6, title: "Designing Lock-Based Concurrent Data Structures", status: "⏳ Coming Soon" },
    { number: 7, title: "Designing Lock-Free Concurrent Data Structures", status: "⏳ Coming Soon" },
    { number: 8, title: "Designing Concurrent Code", status: "⏳ Coming Soon" },
    { number: 9, title: "Advanced Thread Management", status: "⏳ Coming Soon" },
    { number: 10, title: "Testing and Debugging Multithreaded Applications", status: "⏳ Coming Soon" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          ← Back to Blog
        </a>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">⚡ Concurrency in Action</h1>
          <p className="text-gray-300">
            Practical guide to writing robust multithreaded applications in C++. 
            From basic threading to lock-free data structures.
          </p>
        </div>

        <div className="grid gap-4">
          {chapters.map((chapter) => (
            <a
              key={chapter.number}
              href={`/blog/concurrency/chapter-${chapter.number}`}
              className="block p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500 hover:bg-gray-900 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-purple-400">Chapter {chapter.number}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${chapter.status.includes('✅') ? 'bg-green-900/50 text-green-300' : chapter.status.includes('📝') ? 'bg-yellow-900/50 text-yellow-300' : 'bg-gray-800 text-gray-400'}`}>
                      {chapter.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{chapter.title}</h3>
                </div>
                <span className="text-gray-400 hover:text-white">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-800/50">
            <h3 className="text-xl font-bold mb-3">🔑 Key Concepts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Thread management and lifecycle</li>
              <li>• Mutexes and lock guards</li>
              <li>• Condition variables</li>
              <li>• Atomic operations</li>
              <li>• Memory barriers</li>
              <li>• Lock-free programming</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
            <h3 className="text-xl font-bold mb-3">🎯 Real-world Applications</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• High-frequency trading systems</li>
              <li>• Game engines</li>
              <li>• Database systems</li>
              <li>• Web servers</li>
              <li>• Scientific computing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
