import Link from 'next/link'

const ITEMS = [
  { name: 'static page A', pathname: 'static-page-a' },
  { name: 'static page B', pathname: 'static-page-b' },
  { name: 'static page C', pathname: 'static-page-c' },
]

export default function NavLayout({ children }) {
  return (
    <>
      <nav>
        <ul>
          {ITEMS.map(({ name, pathname }) => (
            <li key={pathname}>
              <Link href={`/${pathname}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      {children}
    </>
  )
}
