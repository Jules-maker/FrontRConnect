import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <main className="h-screen w-screen pt-4 bg-primary-light dark:bg-primary-dark text-black dark:text-white">
        <Outlet />
        <div className="fixed bottom-0 left-0 z-50 w-full shadow-inner p-2">
          <nav>
            <ul className="grid grid-cols-4 gap-2" id="nav-menu">
              <li className="p-1">
                <NavLink to={`/`} className="flex flex-col gap-1 items-center justify-center text-sm hover:text-secondary">(icon)<p>Accueil</p></NavLink>
              </li>
              <li className="p-1">
                <NavLink to={`/app`} className="flex flex-col gap-1 items-center justify-center text-sm hover:text-secondary">(icon)<p>Carte</p></NavLink>
              </li>
              <li className="p-1">
                <NavLink to={`/app`} className="flex flex-col gap-1 items-center justify-center text-sm hover:text-secondary">(icon)<p>Restaurant</p></NavLink>
              </li>
              <li className="p-1">
                <NavLink to={`/app`} className="flex flex-col gap-1 items-center justify-center text-sm hover:text-secondary">(icon)<p>Mon profil</p></NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    );
  }