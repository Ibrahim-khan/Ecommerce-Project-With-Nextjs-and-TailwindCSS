import Certificate_Gallery from "@/components/Certificate_Gallery";
import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Testimonials from "@/components/Testimonials";
import Testimony_Picture from "@/components/Testimony_Picture";

export default function Home() {
  return (
    <main>
       <Hero />
       <NewProduct />
       <Testimonials/>
       <Certificate_Gallery/>
       <Testimony_Picture />
    </main>
  );
}
