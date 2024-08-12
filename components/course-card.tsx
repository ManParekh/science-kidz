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
      <div className="h-2/4 w-full rounded-2xl border-slate-500 cursor-pointer z-10 overflow-hidden">
        <Image
          src={img}
          alt={title}
          sizes="100vw"
          width={350}
          height={270}
          className="h-full w-full object-cover object-center rounded-2xl transform hover:scale-110 duration-500 z-0"
        />
      </div>
      <div className="py-5 divide-y-2 divide-transparent flex flex-col">
        <h3 className="text-xs md:text-base xl:text-3xl text-red-500 font-semibold self-start text-start z-20">
          {title}
        </h3>
        <p className="md:block mt-3 text-black text-base text-start">
          {description}
        </p>
      </div>
    </div>
  );
}

    // <div className="md:max-h-[500px] md:max-w-[400px] bg-white border-zinc-300 border md:border-zinc-300 rounded-md text-xs md:text-sm xl:text-base">
    //   <div className="aspect-[4/3] relative flex justify-center items-center bg-white rounded-3xl">
    //     <Image
    //       src={img}
    //       alt={title}
    //       sizes="100vw"
    //       width={300}
    //       height={270}
    //       className="md:absolute md:-top-3 md:w-11/12 md:aspect-auto md:rounded-3xl md:shadow-2xl md:cursor-pointer md:hover:scale-110 md:hover:z-30 md:hover:top-0 md:duration-150 md:object-cover md:object-center w-full h-full object-cover object-center rounded-t-md bg-white"
    //     />
    //   </div>
    //   <div className="pt-0 px-2 lg:pt-0 lg:p-5 divide-y-2 divide-transparent flex flex-col">
    //     <h3 className="text-xs md:text-base xl:text-2xl text-orange-500 font-semibold self-center text-center z-20">
    //       {title}
    //     </h3>
    //     <p className="hidden md:block mt-3 text-gray-700 text-sm text-center">
    //       {description}
    //     </p>
    //   </div>
    // </div>