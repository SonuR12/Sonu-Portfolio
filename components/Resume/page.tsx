import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export function Resume() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="bg-primary fixed top-4 left-4 z-50 shadow-lg backdrop-blur-md text-white hover:bg-white/20 transition cursor-pointer"
        >
          Resume
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white text-gray-900 rounded-xl shadow-xl px-6 py-6">
        {/* Required for accessibility */}
        <DialogHeader>
          <DialogTitle className="hidden">Sonu Rai Resume</DialogTitle>
        </DialogHeader>

        {/* Header with photo, name, role and contact */}
        <div className="flex flex-col sm:flex-row items-center self-start justify-between gap-6 border-b pb-6 w-full">
          <Image
            src="/profile_picture.png"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-lg object-cover border border-gray-200 shadow-xl w-1/4"
          />
          <div className="flex flex-col items-start space-y-1 w-3/4">
            <h1 className="text-3xl font-bold uppercase">Sonu Rai</h1>
            <p className="text-sm tracking-wider uppercase text-gray-600">
              Software Engineer
            </p>
            <div className=" grid sm:grid-cols-2 text-sm text-gray-700 space-y-1 mt-3">
              <p>
                📞 &nbsp;
                <Link
                  href="tel:+91 9905757864"
                  className="hover:underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                >
                  +91 9905757864
                </Link>
              </p>
              <p className="flex">
                {/* mail */}
                <Image height={20} width={20} src="/gmail.svg" alt="Gmail" />
                &nbsp;
                <Link
                target="_blank"
                  href="mailto:sonurai272004@gmail.com"
                  className="hover:underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                >
                  sonurai272004@gmail.com
                </Link>
              </p>
              <p className="flex">
                <Image
                  height={20}
                  width={20}
                  src="/linkdin.svg"
                  alt="LinkedIn"
                />
                &nbsp;
                <Link
                target="_blank"
                  href="https://www.linkedin.com/in/sonu-rai-r12/"
                  className="hover:underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                >
                  Sonu Rai
                </Link>
              </p>
              <p className="flex">
                <Image height={20} width={20} src="/github.svg" alt="Github" />
                &nbsp;
                <Link
                target="_blank"
                  href="https://github.com/SonuR12/"
                  className="hover:underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                >
                  SonuR12
                </Link>
              </p>
              <p>📍 Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Section: Professional Summary */}
        <section className="mt-6">
          <h3 className="bg-gray-800 text-white text-sm px-3 py-1 rounded uppercase font-semibold w-fit">
            Professional Summary
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Passionate and detail-oriented Full Stack Developer with strong
            expertise in JavaScript, TypeScript, Flutter, and scalable web
            technologies like Next.js, MongoDB, and Prisma. Committed to
            building clean, performant, and accessible apps.
          </p>
        </section>

        {/* Section: Academic Background */}
        <section className="mt-6">
          <h3 className="bg-gray-800 text-white text-sm px-3 py-1 rounded uppercase font-semibold w-fit">
            Academic Background
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-sm">
            <div>
              <p className="font-semibold">ADGIPS (GGSIPU)</p>
              <p>B.Tech in CSE (2023 - Present)</p>
              <p className="text-gray-600">GPA: 8.7/10</p>
              <p className="mt-2 text-gray-700">
                Learned computer science fundamentals and hands-on full stack
                projects using MERN, Flutter, Java, and Node.js.
              </p>
            </div>
            <div>
              <p className="font-semibold">School Of Excellence</p>
              <p>Senior Secondary (PCMB 2022 Passout)</p>
              <p className="text-gray-600">Grade B</p>
              <p className="mt-2 text-gray-700">
                Focused on Math, Physics, and Computer Science to strengthen
                logic and problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Career History */}
        <section className="mt-6">
          <h3 className="bg-gray-800 text-white text-sm px-3 py-1 rounded uppercase font-semibold w-fit">
            Career History / Projects
          </h3>
          <div className="mt-2 space-y-4 text-sm">
            <div className="mt-2 space-y-4 text-sm">
              <div>
                <p className="font-semibold">
                  AI Mentor Assistant (March 2025)
                </p>
                <p className="text-gray-600">
                  Next.js, MongoDB, Tailwind, Gemini API
                </p>
                <p className="mt-1 text-gray-700 leading-relaxed">
                  Developed an AI-driven mentorship platform offering tailored
                  career roadmaps based on users’ backgrounds and goals.
                  Engineered secure sign-ins, personalized dashboards, and a
                  smooth, responsive UI. Collaborated closely with&nbsp;
                  <a
                    href="https://www.linkedin.com/in/jatinkaushik-jk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Jatin Kaushik</span>
                    <Image
                      height={20}
                      width={20}
                      src="/linkdin.svg"
                      alt="LinkedIn"
                    />
                  </a>
                  ,&nbsp;
                  <Link
                    href="https://www.linkedin.com/in/ayush-aryan-3a8367358/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ayush Aryan</span>
                    <Image
                      height={20}
                      width={20}
                      src="/linkdin.svg"
                      alt="LinkedIn"
                    />
                  </Link>
                  , and&nbsp;
                  <Link
                    href="https://www.linkedin.com/in/sumit-kumar-17097831a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Sumit Kumar</span>
                    <Image
                      height={20}
                      width={20}
                      src="/linkdin.svg"
                      alt="LinkedIn"
                    />
                  </Link>
                  — ensuring smooth teamwork, clean code, and user-focused
                  results.
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold">
                Maharani E-commerce (January 2025)
              </p>
              <p className="text-gray-600">
                Next.js, Admin Panel, MongoDB, Mongoose
              </p>
              <p className="mt-1 text-gray-700 leading-relaxed">
                Created a full-featured e-commerce platform with a robust admin
                dashboard for managing products, users, and orders. Implemented
                secure authentication, product filtering, and dynamic search.
                Integrated CRUD operations and order tracking, ensuring a
                seamless shopping experience for users and efficient store
                management for admins.
              </p>
            </div>

            <div>
              <p className="font-semibold">Other Projects</p>
              <ul className="list-disc ml-5 text-gray-700 mt-1 space-y-1 text-sm">
                <li>
                  <strong>Sonu.Dev – Personal Portfolio:</strong> Sleek,
                  responsive portfolio built with HTML5, CSS3, and JavaScript to
                  showcase skills and projects.
                </li>
                <li>
                  <strong>Mentor Mind:</strong> AI-powered mentorship app that
                  recommends custom roadmaps using Gemini API and Next.js (Team
                  Project).
                </li>
                <li>
                  <strong>Apple Website Clone:</strong> Pixel-perfect clone of
                  Apple’s homepage with Tailwind CSS and smooth animations.
                </li>
                <li>
                  <strong>Antivirus Product Site:</strong> Freelance modern
                  responsive site built with HTML, CSS, and JS featuring
                  interactive sections and downloads.
                </li>
                <li>
                  <strong>Spotify Clone:</strong> Responsive web player layout
                  replicating Spotify’s UI, built with HTML, CSS, JavaScript.
                </li>
                <li>
                  <strong>Blinkit UI Clone:</strong> E-commerce UI built with
                  Flutter and Dart, deployed via Firebase with custom
                  components.
                </li>
                <li>
                  <strong>Todo Web App:</strong> Functional task manager app
                  built with Flutter and Dart, featuring CRUD actions and
                  Firebase hosting.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Core Skills */}
        <section className="mt-6">
          <h3 className="bg-gray-800 text-white text-sm px-3 py-1 rounded uppercase font-semibold w-fit">
            Core Skills
          </h3>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
            <li>
              <strong>Languages:</strong> Java, TypeScript, JavaScript, Dart
            </li>
            <li>
              <strong>Backend & Scripting:</strong> Node.js, PHP, Mongoose,
              Prisma (ORM)
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, MySQL
            </li>
            <li>
              <strong>API & Communication:</strong> REST APIs
            </li>
            <li>
              <strong>Frameworks:</strong> Next.js (Web), React.js, Flutter
              (Mobile + Web)
            </li>
            <li>
              <strong>Authentication:</strong> NextAuth, Clerk, Firebase Auth,
              JWT (JSON Web Token)
            </li>
            <li>
              <strong>UI Libraries:</strong> ShadCN UI, Tailwind CSS, Bootstrap
            </li>
            <li>
              <strong>Soft Skills:</strong> Teamwork & Collaboration, Debugging
              & Problem Solving, Clean Code Practices
            </li>
          </ul>
        </section>

        {/* Section: Work References */}
        <section className="mt-6">
          <h3 className="bg-gray-800 text-white text-sm px-3 py-1 rounded uppercase font-semibold w-fit">
            Recent Works
          </h3>
          <div className="mt-2 text-sm text-gray-700 space-y-1">
            <p>
              Ecommerce Website (
              <Link
                href="https://maharani-blush.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700 hover:underline"
              >
                Maharani
              </Link>
              )
            </p>
            <p>
              Mentor Mind (
              <Link
                href="https://mentor-mind-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700 hover:underline"
              >
                AI Mentor Mind
              </Link>
              )
            </p>
          </div>
        </section>

        {/* Footer */}
        <DialogFooter className="mt-6 justify-end">
          <Button disabled className="text-white bg-indigo-600 hover:bg-gray-700 mt-6">
            Save Resume
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
