import Link from "next/link"


const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 h-20">
         <div>
            <Link href="/">Suru</Link>
        </div>
        <div className=" flex  gap-15">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">contact</Link>
       </div>
    </nav>
  )
}

export default NavBar