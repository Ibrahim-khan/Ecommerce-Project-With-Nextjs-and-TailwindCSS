import Certificate_Gallery from "@/components/Certificate_Gallery";
import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
       <Hero />
       <NewProduct />
       <Testimonials/>
       <Certificate_Gallery/>
    </main>
  );
}
