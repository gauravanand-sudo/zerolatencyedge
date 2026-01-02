export default function ScottMeyersPage() {
  const items = [
    { number: 1, title: "Understand template type deduction", status: "✅ Completed" },
    { number: 2, title: "Understand auto type deduction", status: "📝 In Progress" },
    { number: 3, title: "Understand decltype", status: "⏳ Coming Soon" },
    { number: 4, title: "Know how to view deduced types", status: "⏳ Coming Soon" },
    { number: 5, title: "Prefer auto to explicit type declarations", status: "⏳ Coming Soon" },
    { number: 6, title: "Use the explicitly typed initializer idiom when auto deduces undesired types", status: "⏳ Coming Soon" },
    { number: 7, title: "Distinguish between () and {} when creating objects", status: "⏳ Coming Soon" },
    { number: 8, title: "Prefer nullptr to 0 and NULL", status: "⏳ Coming Soon" },
    { number: 9, title: "Prefer alias declarations to typedefs", status: "⏳ Coming Soon" },
    { number: 10, title: "Prefer scoped enums to unscoped enums", status: "⏳ Coming Soon" },
    { number: 11, title: "Prefer deleted functions to private undefined ones", status: "⏳ Coming Soon" },
    { number: 12, title: "Declare overriding functions override", status: "⏳ Coming Soon" },
    { number: 13, title: "Prefer const_iterators to iterators", status: "⏳ Coming Soon" },
    { number: 14, title: "Declare functions noexcept if they won't emit exceptions", status: "⏳ Coming Soon" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          ← Back to Blog
        </a>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">📚 Scott Meyers - Effective C++ Series</h1>
          <p className="text-gray-300">
            Complete breakdown of all items from Effective Modern C++, with code examples, 
            performance implications, and real-world applications.
          </p>
        </div>

        <div className="grid gap-4">
          {items.map((item) => (
            <a
              key={item.number}
              href={`/blog/scott-meyers/item-${item.number}`}
              className="block p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 hover:bg-gray-900 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-400">Item {item.number}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${item.status.includes('✅') ? 'bg-green-900/50 text-green-300' : item.status.includes('📝') ? 'bg-yellow-900/50 text-yellow-300' : 'bg-gray-800 text-gray-400'}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                </div>
                <span className="text-gray-400 hover:text-white">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-800/50">
          <h3 className="text-2xl font-bold mb-4">📖 About Scott Meyers Books</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• <span className="font-semibold">Effective C++ (1991)</span> - 55 specific ways to improve programs</li>
            <li>• <span className="font-semibold">More Effective C++ (1996)</span> - 35 new ways to improve programs</li>
            <li>• <span className="font-semibold">Effective STL (2001)</span> - 50 specific ways to use STL</li>
            <li>• <span className="font-semibold">Effective Modern C++ (2014)</span> - 42 specific ways for C++11/14</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
