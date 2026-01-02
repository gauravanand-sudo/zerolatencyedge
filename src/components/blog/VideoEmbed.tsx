// src/components/blog/VideoEmbed.tsx
'use client'

interface VideoEmbedProps {
  videoId: string
  title: string
  channel?: string
}

export function VideoEmbed({ videoId, title, channel = 'ZeroLatencyEdge' }: VideoEmbedProps) {
  return (
    <div className="my-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-400">{channel}</p>
        </div>
      </div>
      <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden border border-gray-800">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
