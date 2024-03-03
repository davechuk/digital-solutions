import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
   <nav className=" flexCenter max-container  relative z-30 py-5">
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={74} height={29} />
    </Link>
   </nav>
  )
}

export default Navbar