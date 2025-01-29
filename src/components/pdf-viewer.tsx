"use client"

interface PDFViewerProps {
  pdfUrl: string
}

export function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border">
      <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
        className="w-full h-full"
        title="PDF Viewer"
      />
    </div>
  )
}
