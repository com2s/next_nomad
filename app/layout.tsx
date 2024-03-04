import { Metadata } from "next"
import Navigation from "../components/navigation"

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
