// function 이름은 아무거나 상관없음

export const metadata = {
    title: 'About Us',
    description: 'The Best of Us on the Best Framework',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        {children}
        &copy; {new Date().getFullYear()}
      </div>
  )
}
