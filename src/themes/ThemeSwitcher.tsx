import { themes } from "./data";

export default function ThemeSwitcher() {
  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 2H6V4H4V6H2V16H4V18H6V20H8V22H18V20H20V18H22V10H20V12H18V14H12V12H10V6H12V4H14V2ZM18 2H20V4H22V6H20V8H18V6H16V4H18V2Z"
            fill="currentColor"
          />
        </svg>
        <span>Tema</span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-200 text-primary rounded-box w-52"
      >
        {themes.map((theme) => (
          <li key={theme.id}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={
                theme.name.charAt(0).toUpperCase() + theme.name.slice(1)
              }
              value={theme.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
