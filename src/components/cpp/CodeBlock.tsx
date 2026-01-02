// src/components/cpp/CodeBlock.tsx
'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}

export function CodeBlock({ 
  code, 
  language = 'cpp', 
  showLineNumbers = true,
  highlightLines = [] 
}: CodeBlockProps) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-gray-700">
        <span className="text-sm font-mono text-gray-300">{language.toUpperCase()}</span>
        <button 
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-gray-400 hover:text-white"
        >
          Copy
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: highlightLines.includes(lineNumber) 
              ? 'rgba(59, 130, 246, 0.1)' 
              : 'transparent',
            display: 'block',
            width: '100%',
          }
        })}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '14px',
          backgroundColor: '#0a0a0a',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
