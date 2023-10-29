type PropsType = {
  photo: string;
  title: string;
  price: string;
  desc: string;
};

function ListCard({ photo, title, price, desc }: PropsType) {
  return (
    <>
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
    </>
  );
}

export default ListCard;
