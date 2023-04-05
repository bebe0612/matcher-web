import './globals.css'

export const metadata = {
  title: '서비스 이름',
  description: 'placeholder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
