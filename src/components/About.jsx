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

            <div className="relative w-96 h-96 glass-premium p-1 rounded-3xl overflow-hidden">
              <img
                src="/images/about_img.png"
                alt="Adarsh Vishwakarma working on laptop"
                className="w-full h-full object-cover rounded-3xl"
              />
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
                I’m a B.Sc. Information Technology student and an aspiring AI & Data Science professional with a strong interest in building practical, technology-driven solutions. My core career focus is Artificial Intelligence, Machine Learning, and Data Science, while I actively develop my technical foundation through software development, databases, data analytics, and modern web technologies.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                I have hands-on experience building and deploying web applications using technologies such as React, JavaScript, HTML, CSS, SQL, GitHub, and cloud deployment platforms. I also work with data analysis and visualization tools including Power BI and Advanced Excel, and I am continuously developing my skills in Python, AI/ML, and Data Science.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                I believe in learning by building real projects. I enjoy transforming ideas into functional applications, experimenting with AI-powered solutions, working with data, and exploring new technologies. My long-term goal is to build a career in AI and Data Science, where I can combine software development, analytical thinking, and artificial intelligence to solve meaningful real-world problems.
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
