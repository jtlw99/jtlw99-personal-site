import { Button } from "@/components/ui/button"
import { Github, Instagram } from "lucide-react"
import Image from "next/image"

export default function MinimalistOLEDDarkPortfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-300 px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-12">
        <nav className="flex justify-between items-center">
          <Image
            src="https://avatars.githubusercontent.com/u/93564256?v=4"
            alt="JT Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex space-x-4">
            <a href="#about" className="text-gray-400 hover:text-white text-sm">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm">Projects</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center space-y-12">
        <section id="about" className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Justin Lewis</h1>
          <p className="text-xl text-gray-400 mb-6">dev | designer | fotographer</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
        </section>

        <section id="projects" className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="bg-gray-900 p-4 rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt={`Project ${project}`}
                  width={300}
                  height={200}
                  className="rounded-md mb-2"
                />
                <h3 className="text-white font-semibold">Project {project}</h3>
                <p className="text-gray-400 text-sm mt-1">Brief description</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
