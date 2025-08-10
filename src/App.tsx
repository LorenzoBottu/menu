import React from "react";
import Hero from "./components/Hero";
import MenuCategory from "./components/MenuCategory";
import menuData from "./menu.json";
import ThemeSwitcher from "./components/ThemeSwitcher";

type MenuData = {
  [key: string]: any[];
};

function App() {
  const typedMenuData: MenuData = menuData;
  const categorie = Object.keys(typedMenuData);

  const formatNavTitle = (title: string) => {
    return title
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const MenuNav = () => (
    <nav className="sticky top-0 z-20 bg-white/80 dark:bg-brand-background/80 backdrop-blur-sm shadow-md py-2 transition-colors duration-500">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex justify-center flex-grow flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
          {categorie.map((categoria) => (
            <a
              key={categoria}
              href={`#${categoria}`}
              className="font-sans font-bold text-sm md:text-base text-gray-600 dark:text-brand-text-secondary hover:text-brand-primary transition-colors"
            >
              {formatNavTitle(categoria)}
            </a>
          ))}
        </div>
        <div className="pl-4">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );

  return (
    <div className="bg-white dark:bg-brand-background font-sans text-gray-800 dark:text-brand-text transition-colors duration-500">
      <Hero />
      <MenuNav />

      <main id="menu" className="container mx-auto px-6 py-20">
        {categorie.map((categoria) => (
          <MenuCategory
            key={categoria}
            titolo={categoria}
            prodotti={typedMenuData[categoria]}
          />
        ))}
      </main>

      <footer className="text-center p-8 bg-gray-100 dark:bg-black/50 text-gray-600 dark:text-brand-text-secondary transition-colors duration-500">
        <p className="font-serif text-xl text-brand-primary">Caffè del Corso</p>
        <p className="text-sm mt-2">Piazza Principale, 123 - La Tua Città</p>
      </footer>
    </div>
  );
}

export default App;
