import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero175 = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/Aubade_Leveaux_v4.png')" }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0"></div>

      {/* Logo centré */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img 
          src="/vrai_logo.PNG" 
          alt="Leveaux Logo" 
          className="scale-[0.68] translate-y-[-75px]" 
        />
      </div>

      {/* Bouton sous l'image */}
      <div className="absolute bottom-44"> {/* Ajustez cette valeur selon vos besoins */}
        <Button className="text-white bg-transparent border-2 border-white border-solid hover:bg-cyan-950 hover:text-white transition duration-transition duration-300 px-8 py-2 text-lg rounded-3xl" size="home_size">
          <Link href="/contact" className="text-lg">
            Contactez-nous !
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero175;