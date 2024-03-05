import "styles/global.css"
import { Metadata } from "next"
import Navigation from "../components/navigation"

// 하위 페이지에 따라 다른 메타데이터를 제공하기 위해
export const metadata :Metadata= {
  title: {
    template: '%s | Next Movies',
    default: 'Loading...'
  },
  description: 'The Best Movies on the Best Framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
