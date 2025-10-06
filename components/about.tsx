export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Frontend Developer with experience in building responsive and user-friendly web applications.
            Currently based in <span className="text-foreground font-medium">Doha, Qatar</span>, I specialize in
            translating UI/UX designs into functional interfaces and optimizing performance.
          </p>
          <p>
            My journey in web development has taken me through various exciting projects, from working at{" "}
            <span className="text-foreground font-medium">YASSIR</span> on scalable applications serving thousands of
            users, to contributing to tech communities through{" "}
            <span className="text-foreground font-medium">GDG Batna</span> where I helped organize hackathons and
            workshops for 300+ participants.
          </p>
          <p>
            I'm passionate about creating experiences that not only look great but are meticulously built for
            performance and usability. I thrive in Agile environments and enjoy collaborating with cross-functional
            teams to deliver high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
