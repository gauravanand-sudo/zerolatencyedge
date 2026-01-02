export default function InterviewPage() {
  const books = [
    {
      title: "Elements of Programming Interviews in C++",
      author: "Adnan Aziz, Tsung-Hsien Lee, Amit Prakash",
      focus: "Algorithmic problem solving",
      difficulty: "Advanced",
      essential: true,
      notes: "The bible for FAANG interviews. Must solve all problems."
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      focus: "General interview preparation",
      difficulty: "Intermediate",
      essential: true,
      notes: "Excellent for behavioral questions and problem-solving patterns."
    },
    {
      title: "Programming Pearls",
      author: "Jon Bentley",
      focus: "Algorithm design and optimization",
      difficulty: "Advanced",
      essential: true,
      notes: "Classic book that Jane Street interviewers love."
    },
    {
      title: "Concrete Mathematics",
      author: "Ronald Graham, Donald Knuth, Oren Patashnik",
      focus: "Mathematical foundations",
      difficulty: "Expert",
      essential: false,
      notes: "For quantitative roles at Jane Street/Two Sigma."
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      focus: "System design",
      difficulty: "Intermediate",
      essential: true,
      notes: "Essential for senior engineer/system design rounds."
    },
  ];

  const companies = [
    {
      name: "Jane Street",
      focus: "Quantitative trading, OCaml/C++",
      tips: [
        "Strong probability and statistics",
        "Low-latency C++ knowledge",
        "Functional programming concepts",
        "Brain teasers and probability puzzles"
      ]
    },
    {
      name: "Adobe",
      focus: "Creative software, C++/Computer Graphics",
      tips: [
        "Strong C++17/20 knowledge",
        "Design patterns",
        "Computer graphics fundamentals",
        "System design for large applications"
      ]
    },
    {
      name: "FAANG",
      focus: "General software engineering",
      tips: [
        "LeetCode Hard proficiency",
        "Behavioral questions (STAR method)",
        "System design (HLD/LLD)",
        "Coding best practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          ← Back to Blog
        </a>
        
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Cracking Top Tech Interviews
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Must-read books and preparation strategies for Jane Street, Adobe, and FAANG companies
          </p>
        </div>

        {/* Books Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">📚 Essential Reading List</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl border ${book.essential ? 'border-green-500/50 bg-green-900/10' : 'border-gray-800 bg-gray-900/50'}`}
              >
                {book.essential && (
                  <span className="inline-block px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm mb-4">
                    🔥 Essential
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-400 mb-3">by {book.author}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-800 rounded text-sm">{book.focus}</span>
                  <span className="px-2 py-1 bg-blue-900/50 rounded text-sm">{book.difficulty}</span>
                </div>
                <p className="text-gray-300 text-sm">{book.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Specific Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">🏢 Company-Specific Preparation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4">{company.name}</h3>
                <p className="text-gray-400 mb-4">{company.focus}</p>
                <h4 className="font-bold mb-3">Key Focus Areas:</h4>
                <ul className="space-y-2">
                  {company.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Study Plan */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6">📅 12-Week Study Plan</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800/30 rounded-xl">
              <h4 className="font-bold mb-2">Weeks 1-4</h4>
              <p className="text-sm text-gray-400">Data Structures & Algorithms</p>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-xl">
              <h4 className="font-bold mb-2">Weeks 5-6</h4>
              <p className="text-sm text-gray-400">C++ Advanced Topics</p>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-xl">
              <h4 className="font-bold mb-2">Weeks 7-8</h4>
              <p className="text-sm text-gray-400">System Design</p>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-xl">
              <h4 className="font-bold mb-2">Weeks 9-12</h4>
              <p className="text-sm text-gray-400">Mock Interviews & Revision</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
