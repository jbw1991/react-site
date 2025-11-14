import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-28"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Software Engineer · Cloudflare
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I&apos;m <span className="text-primary">Josh</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              I build fast, reliable experiences at the edge using modern web
              technologies. I care about performance, developer experience, and
              thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn bg-primary hover:bg-blue-600 transition-colors duration-300">
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-primary to-indigo-500 shadow-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
              <div className="relative z-10 text-center px-6">
                <div className="text-white text-5xl font-bold mb-2">J</div>
                <p className="text-white/90 text-sm uppercase tracking-[0.2em]">
                  Cloudflare Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
