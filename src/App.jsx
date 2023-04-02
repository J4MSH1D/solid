// Modules
import { Routes, Route } from "@solidjs/router";
// Pages
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Test } from "./pages/test";
// Components
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main class="min-h-screen w-screen overflow-x-hidden">
        <div class="mx-auto text-center uppercase font-bold">
          shag'zod yomon bacha
        </div>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/test" component={Test} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
