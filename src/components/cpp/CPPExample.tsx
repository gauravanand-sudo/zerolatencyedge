// src/components/cpp/CPPExample.tsx
interface CPPExampleProps {
  title: string
  code: string
  explanation: string
  language?: string
}

export function CPPExample({ 
  title, 
  code, 
  explanation, 
  language = 'cpp' 
}: CPPExampleProps) {
  return (
    <div className="my-8 rounded-xl border border-gray-800 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black p-4">
        <h4 className="text-lg font-semibold text-cyan-300 flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded bg-cyan-900/50 text-cyan-300">C++</span>
          {title}
        </h4>
      </div>
      <div className="p-0">
        <CodeBlock code={code} language={language} />
      </div>
      <div className="p-4 bg-gray-900/50 border-t border-gray-800">
        <p className="text-gray-300 text-sm">{explanation}</p>
      </div>
    </div>
  )
}
