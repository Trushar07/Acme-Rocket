import { useEffect } from "react";
import ContactUs from "./ContactUs";
import ListCard from "./ListCard";
import Testimonial from "./Testimonial";
import RocketDab from "./assets/rocketdab.png";
import RocketLaunch from "./assets/rocketlaunch.png";
import RocketMan from "./assets/rocketman.png";
import RocketRide from "./assets/rocketride.png";

function Content() {
  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showanimation");
      } else {
        entry.target.classList.remove("showanimation");
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements?.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="max-w-4xl mx-auto">
      <section
        className="flex flex-col-reverse justify-center sm:flex-row gap-8 items-center p-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
        id="hero"
      >
        <article className="sm:w-1/2">
          <h2 className="hide max-w-md text-4xl font-bold text-center sm:text-left sm:text-5xl text-slate-900 dark:text-white">
            We Boldly Go{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              Where No Rocket
            </span>{" "}
            Has Gone Before...
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 hide transition delay-150">
            We are building rockets for the next century today. From
            Moon&#127773; to Mars&#128165;, Saturn🪐 and Beyond...
          </p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 hide transition delay-300">
            Think Acme Rockets🚀
          </p>
        </article>
        <img
          src={RocketDab}
          alt="Rocket Dab Image"
          className="w-1/2 hide transition delay-700"
        />
      </section>

      <hr className="w-1/2 bg-black dark:bg-white mx-auto" />

      <section id="rockets" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white text-center font-bold mb-5 scroll-mt-20 hide">
          Our Rockets
        </h2>

        <ul className="list-none mx-auto flex flex-col sm:flex-row my-12 items-center gap-8 ">
          <li className="w-2/3 sm:h-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-gray-800 shadow-xl rounded-3xl py-6 px-2 hide">
            <ListCard
              photo={RocketMan}
              title="Explorer"
              price="$"
              desc="Affordable Exploration"
            />
          </li>

          <li className="w-2/3 sm:h-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-gray-800 shadow-xl rounded-3xl py-6 px-2 hide delay-200">
            <ListCard
              photo={RocketRide}
              title="Adventurer"
              price="$$"
              desc="Best Selling Exploration"
            />
          </li>
          <li className="w-2/3 sm:h-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-gray-800 shadow-xl rounded-3xl py-6 px-2 hide delay-500">
            <ListCard
              photo={RocketLaunch}
              title="Infinity"
              price="$$$"
              desc="Luxury Exploration"
            />
          </li>
        </ul>
      </section>

      <hr className="w-1/2 bg-black dark:bg-white mx-auto" />

      <section id="testimonials" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white text-center font-bold mb-5">
          Testimonials
        </h2>

        <div className="hide">
          <Testimonial
            quote="Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience."
            author="Wile E. Coyote, Genius"
          />
        </div>

        <div className="hide transition delay-150">
          <Testimonial
            quote=" The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several. Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs."
            author="Marvin The Martian &amp; K-9"
          />
        </div>

        <div className="hide transition delay-300">
          <Testimonial
            quote="I knew I not only wanted. I needed Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says Take me to your leader like Acme's Infinity Rocket! 💯"
            author="Buzz Lightyear"
          />
        </div>
      </section>

      <hr className="w-1/2 bg-black dark:bg-white mx-auto" />

      <section id="contact" className="p-6 my-12 scroll-mt-16">
        <h2 className="text-4xl sm:text-5xl text-slate-900 dark:text-white text-center font-bold mb-5">
          Contact Us
        </h2>
        <ContactUs />
      </section>
    </main>
  );
}

export default Content;
