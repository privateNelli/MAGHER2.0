import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"

export default function Contacto() {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-800 text-amber-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/ "><h1 className="text-2xl font-bold">MAGHER</h1></Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/ ">Inicio</Link>
              </li>
              <li>
                <Link href="/productos">Productos</Link>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero bg-amber-100 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">Contáctanos</h1>            
          </div>
        </section>

        <section className="contact py-16">
                  <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-amber-800 text-center mb-8">Nos comunicamos contigo por estas vías</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[{name: "WhatsApp", image: "/contact/wsp.png" }, 
                      {name: "E-Mail", image: "/contact/gmail.png" }, 
                      {name: "Formulario", image: "/contact/form.png" },].map((product, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="mx-auto mb-4 rounded-lg object-cover"
                          />
                          <h3 className="text-xl font-semibold text-amber-800 text-center">{product.name}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

        {/* <section className="about bg-amber-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-amber-800 text-center mb-8">About Us</h2>
            <p className="text-lg text-amber-700 text-center max-w-2xl mx-auto">
              Sweet Delights Bakery has been serving our community with the finest baked goods since 1995. Our passion
              for quality ingredients and traditional baking methods ensures that every bite is a moment of pure joy.
            </p>
          </div>
        </section> */}
      </main>

      <footer className="bg-amber-800 text-amber-50 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Clock className="mr-2" />
              <p>Abierto de 7:00 a 20:00</p>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <p>E. Bennet 140, Padre las Casas</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <p>+56 9 6742 3361</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 MAGHER. Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

