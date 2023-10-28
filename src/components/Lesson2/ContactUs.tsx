function ContactUs() {
  return (
    <form
      action=""
      className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col gap-4 items-left"
    >
      <label htmlFor="subject" className="text-xl font-medium">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        required
        minLength={3}
        maxLength={60}
        placeholder="Enter your subject"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800"
      />
      <label htmlFor="message" className="text-xl font-medium">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={5}
        required
        placeholder="Enter your message"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 transition-transform transform hover:scale-100 focus:scale-100"
      />

      <button
        type="submit"
        className="w-1/4 mx-auto rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactUs;
