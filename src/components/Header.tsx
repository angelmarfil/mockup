import ThemeSwitcher from "../themes/ThemeSwitcher";

export default function Header() {
  return (
    <div className="w-full navbar bg-primary sticky top-0 z-10 backdrop-blur-lg px-8">
      <div className="navbar-start">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="hidden lg:inline-flex gap-x-2 items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 5H2V19H22V5ZM7 9H9V11H11V13H9V15H7V13H5V11H7V9ZM16 9H14V11H16V9ZM17 13H19V15H17V13Z"
              fill="currentColor"
            />
          </svg>
          Marfil Games
        </div>
      </div>

      <div className="navbar-center">
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal text-sm">
            <li>
              <a>Más populares</a>
            </li>
            <li>
              <a>Novedades</a>
            </li>
            <li>
              <a>Ofertas</a>
            </li>
          </ul>
        </div>

        <div className="block lg:hidden">Marfil Games</div>
      </div>

      <div className="navbar-end">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
