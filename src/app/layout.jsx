import './globals.css'

export const metadata = {
  title: 'Luka Deelkens | Marketeer of Nature',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
