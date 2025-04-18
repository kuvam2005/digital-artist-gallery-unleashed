
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Hi!
        </h1>
        <p className="text-2xl">
          This is Kuvam's Website.<br />
          This is NOT a resume.
        </p>
      </section>

      {/* Welcome Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Welcome to my Portfolio</h2>
          <p className="text-muted text-lg">
            Hello! I'm Kuvam, a passionate developer focusing on creating engaging and functional applications.
          </p>
        </div>
        <div className="rounded-full overflow-hidden aspect-square bg-accent">
          {/* Add your profile image here */}
          <img src="your-profile-image.jpg" alt="Kuvam" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="Stick Hero"
            description="A challenging game where players must create bridges to help their character cross obstacles."
            imageUrl="/lovable-uploads/1b16e0ca-fefb-41cf-b6fd-d9fd21f70390.png"
          />
          <ProjectCard
            title="Riyaaz"
            description="A music practice application designed to help musicians improve their skills."
            imageUrl="/lovable-uploads/1b16e0ca-fefb-41cf-b6fd-d9fd21f70390.png"
          />
          <ProjectCard
            title="Antelope Lazer Cutting Model"
            description="A precision laser cutting project featuring intricate antelope designs."
            imageUrl="/lovable-uploads/1b16e0ca-fefb-41cf-b6fd-d9fd21f70390.png"
          />
        </div>
      </section>

      {/* Find Me Section */}
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold">Find Me</h2>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-accent text-foreground"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-accent text-foreground"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-accent text-foreground"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Index;
