// src/App.tsx
import Hero from "./components/Hero";
import MenuCategory from "./components/MenuCategory";
import menuData from "./menu.json";
import MenuNav from "./components/Navbar";
import Footer from "./components/Footer";
import PaletteSelectorSection from "./components/PaletteSelectorSection";

type MenuData = {
  [key: string]: any[];
};

function App() {
  const typedMenuData: MenuData = menuData;
  const categorie = Object.keys(typedMenuData);

  return (
    <div className="bg-brand-background text-brand-text font-sans transition-colors duration-500">
      <Hero />

      {/* --- POSIZIONE MODIFICATA --- */}
      {/* 1. La barra di navigazione ora viene subito dopo la Hero Section */}
      <MenuNav categorie={categorie} />

      {/* 2. La sezione per la selezione della palette viene dopo */}
      <PaletteSelectorSection />

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
