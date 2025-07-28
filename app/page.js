import BgLayout from "@/components/layouts/bgLayout";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/homeProducts";
import House from "@/components/sections/house";

export default function Home() {
  return (
    <BgLayout>
      <Hero/>
      <House/>
      <Products/>
      {/* <div className="h-screen"/>
      <div className="h-screen"/>
      <div className="h-screen"/>
      <div className="h-screen"/> */}
    </BgLayout>
  );
}
