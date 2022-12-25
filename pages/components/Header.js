import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[70px] bg-white z-10 border-b">
      <div className="container mx-auto h-full flex item-center justify-between">
        <div>
          <Link href="/">
            <span className="text-2xl tracking-tighter inline-flex justify-center text-center h-full items-center px-4 text-slate-800">
              Basket App
            </span>
          </Link>
        </div>
        <nav>
          <ul className="h-full inline-flex px-2">
            <li>
              <a
                href="#"
                className="h-full inline-flex items-center justify-center text-slate-700 tracking-tight px-6 hover:text-black hover:bg-black/10"
              >
                Link 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="h-full inline-flex items-center justify-center text-slate-700 tracking-tight px-6 hover:text-black hover:bg-black/10"
              >
                Link 2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
