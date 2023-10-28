type PropType = {
  quote: string;
  author: string;
};

function Testimonial({ quote, author }: PropType) {
  return (
    <figure className="my-12">
      <blockquote className="bg-indigo-400 dark:bg-gray-800 pl-14 pr-8 py-12 rounded-3xl relative">
        <p className="text-xl sm:text-2xl text-left text-white dark:text-gray-400 mt-2 before:content-['\201C'] before:font-serif before:top-0 before:left-0 before:absolute before:text-9xl before:text-white before:opacity-25 before:translate-x-2 before:translate-y-2 before:transform after:content-['\201D'] after:font-serif after:-bottom-20 after:right-0 after:absolute after:text-9xl after:text-white after:opacity-25 after:-translate-x-2 after:-translate-y-2 after:transform">
          {quote}
        </p>
      </blockquote>
      <figcaption className="italic text-lg sm:text-xl mt-2 text-right text-slate-500 dark:text-gray-400">
        - {author}
      </figcaption>
    </figure>
  );
}

export default Testimonial;
