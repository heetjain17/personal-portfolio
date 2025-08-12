const About = () => {
  return (
    <section id="about" className="px-4 bg-black text-white font-mono">
      <div className="max-w-3xl mx-auto">
        {/* heading */}
        <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-8 decoration-double mb-6 sm:mb-8">
          About
        </h2>

        {/* text content */}
        <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
          I’m a backend-leaning developer who currently spends a lot of time
          building with React, but my real excitement comes from crafting solid,
          efficient server-side systems. I work best independently, but I’m
          looking forward to collaborating with developers who are way better
          than me, because that’s the fastest way to grow. My code? Sometimes
          messy, always functional, and constantly improving as I pick up new
          tricks. I’m driven by curiosity and a genuine love for building things
          that actually work.
          <br />
          When I’m not coding, you’ll probably find me watching football (Come
          on Citeh!).
          <br />I believe in always learning, always improving, and never losing
          the excitement of figuring something out for the first time.
        </p>
      </div>
    </section>
  );
};

export default About;
