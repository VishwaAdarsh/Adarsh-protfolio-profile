export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute -top-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative hidden lg:flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative w-80 h-80 glass-premium p-1">
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center text-gray-500">
                [About Image]
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:order-first">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="glass-card p-8 space-y-4">
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate web developer dedicated to crafting beautiful, functional, and responsive applications. My journey began with curiosity about how the web works, which evolved into a deep love for building elegant digital solutions.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                I specialize in React and modern web technologies, but I'm constantly exploring new frameworks and tools. My goal is to create software that solves real problems while delivering an exceptional user experience.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not coding, I'm exploring AI applications, contributing to open-source projects, and learning from the amazing developer community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <p className="text-sm text-gray-400">Years</p>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <p className="text-sm text-gray-400">Certs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
