import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image width={0} height={0} src="/images/logo.svg" alt="Logo" className="w-10 h-10" />
    </Link>
  )
}
