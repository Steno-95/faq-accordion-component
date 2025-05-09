import AccordionBlock from "./components/AccordionBlock";
import { faq } from "../data/data.json";
import Header from "./ui/Header";
import HeaderFAQ from "./components/HeaderFAQ";
import Footer from "./ui/Footer";

function App() {
  return (
    <main className="relative">
      <Header />
      <section className="faq-container">
        <HeaderFAQ />
        <article className="flex flex-col pb-2 last:border-b-(--purple-light)">
          {faq.map((item, i) => (
            <AccordionBlock
              title={item.title}
              content={item.answer}
              index={i + 1}
              key={item.title}
            />
          ))}
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default App;
