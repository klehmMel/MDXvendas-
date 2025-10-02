import './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <h1> Página Inicial </h1>
        <Link href='/about'> Sobre </Link>
      </main>
    </div>
  )
}