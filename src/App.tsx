// src/App.tsx
import Hero from "./components/Hero";
import MenuCategory from "./components/MenuCategory";
import menuData from "./menu.json";
import MenuNav from "./components/Navbar";
import Footer from "./components/Footer";

type MenuData = {
  [key: string]: any[];
};

function App() {
  const typedMenuData: MenuData = menuData;
  const categorie = Object.keys(typedMenuData);

  return (
    // --- MODIFICA CHIAVE QUI ---
    // Rimosso bg-white e text-gray-800 per usare sempre le classi del tema.
    <div className="bg-brand-background text-brand-text font-sans transition-colors duration-500">
      <Hero />

      <MenuNav categorie={categorie} />

      <main id="menu" className="container mx-auto px-6 py-20">
        {categorie.map((categoria) => (
          <MenuCategory
            key={categoria}
            titolo={categoria}
            prodotti={typedMenuData[categoria]}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
