type PropsType = {
  photo: string;
  title: string;
  price: string;
  desc: string;
};

function ListCard({ photo, title, price, desc }: PropsType) {
  return (
    <li className="w-2/3 sm:h-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-gray-800 shadow-xl rounded-3xl py-6 px-2">
      <img src={photo} alt={title} className="w-1/2 mb:6" />
      <h3 className="text-3xl text-center text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="hidden sm:block text-2xl text-center text-slate-500 dark:text-slate-400 mt-2">
        {price}
      </p>
      <p className="text-xl text-center text-slate-900 dark:text-slate-400 mt-2">
        {desc}
      </p>
    </li>
  );
}

export default ListCard;
