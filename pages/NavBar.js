import Link from "next/link";
const NavBar = () => {
  return (
    <>
      <nav className="bg-cyan-700 w-4/5 p-3 rounded-3xl relative bottom-40">
        <ul className="grid grid-cols-4">
            <li className="w-36">
                <Link href="/">Home</Link>
            </li>
            <li className="w-36">
                <Link href="/AboutUs">About Us</Link>
            </li>
            <li className="w-36">
                <Link href="/ContactUs">Contact Us</Link>
            </li>
            <li className="w-48">
                <Link href="/Forcast">Next 16 days Forcast</Link>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;
