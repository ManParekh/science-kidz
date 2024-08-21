import Image from "next/image";

export function CourseCard({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="md:h-[500px] md:w-[400px] bg-white border-zinc-300 border md:border-zinc-300 rounded-2xl text-xs md:text-sm xl:text-base p-10 z-10">
      <div className="h-auto w-full cursor-pointer z-10 flex justify-center items-center">
        <Image
          src={img}
          alt={title}
          sizes="100vw"
          width={300}
          height={250}
          className="h-full w-[90%] object-cover object-center rounded-2xl transform hover:scale-110 duration-500 z-0 border border-slate-500"
        />
      </div>
      <div className="py-5 divide-y-2 divide-transparent flex flex-col">
        <h3 className="text-xs md:text-base xl:text-[25px] text-red-500 font-semibold self-center text-center z-20">
          {title}
        </h3>
        <p className="md:block mt-3 text-black text-base text-start sm:text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}