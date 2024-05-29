import social from "../assets/social.png";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#">
            <img src={social} alt="" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - Angel Marfil</p>
      </aside>
    </footer>
  );
}
