import Link from "next/link";

export function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <span className="mr-4"></span>
            <span></span>
          </div>
          <div className="flex space-x-4">
            {/* Adicione links para as redes sociais aqui */}
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white border-gray-200 shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-1 rtl:space-x-reverse">
          <img src="./logoblack.png" className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto" alt="logo" />
          <span className="text-3xl font-semibold whitespace-nowrap dark:text-black">
            Mão na Roda
          </span>
          </Link>

        

          {/* Button and Search Icon */}
          <div className="flex items-center space-x-4">
          <Link href="/buy" className="bg-white-400 text-black font-semibold py-2 px-4 rounded-lg">
              login
            </Link>
            <Link href="/buy" className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg">
              Cadastre-se
            </Link>
            <button className="text-gray-500 hover:text-gray-900">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Navigation Menu */}
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8 py-4">
            <li><Link href="/" className="text-gray-700 hover:text-blue-700">Principal</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-blue-700">Suporte</Link></li>
            <li><Link href="/pages" className="text-gray-700 hover:text-blue-700">Serviços</Link></li>
          </ul>
        </div>
      </div>
      
    </header>
  );
}
