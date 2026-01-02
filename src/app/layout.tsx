// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZeroLatencyEdge | High-Performance C++ Programming',
  description: 'C++ tutorials, book summaries (Scott Meyers, Concurrency in Action), and performance optimization techniques',
  keywords: ['C++', 'concurrency', 'performance', 'low latency', 'Scott Meyers', 'multithreading'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500" />
                <span className="text-xl font-bold">ZeroLatencyEdge</span>
              </div>
              <div className="flex space-x-6">
                <a href="/" className="hover:text-cyan-400">Home</a>
                <a href="/blog" className="hover:text-cyan-400">Blog</a>
                <a href="/books" className="hover:text-cyan-400">Books</a>
                <a href="/videos" className="hover:text-cyan-400">Videos</a>
              </div>
            </div>
          </div>
        </nav>
        
        {children}
        
        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-900 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ZeroLatencyEdge. C++ content for performance enthusiasts.</p>
            <div className="mt-4 space-x-6">
              <a href="https://youtube.com/@ZeroLatencyEdge" className="hover:text-red-400">YouTube</a>
              <a href="https://github.com" className="hover:text-gray-300">GitHub</a>
              <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
            </div>
          </div>
        </footer>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
