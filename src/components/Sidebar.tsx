export default function Sidebar() {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-primary pt-12">
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
  );
}
