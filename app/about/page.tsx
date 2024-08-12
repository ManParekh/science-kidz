import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full text-xs md:text-lg xl:text-base px-5 md:px-16 lg:px-36 overflow-hidden p-8 flex justify-center items-center flex-col">
      <h3 className="text-3xl font-semibold uppercase self-center py-5">
        About
      </h3>
      <div className="h-full w-full bg-white rounded-3xl self-center p-10 shadow-xl text-[#171717]">
        <p className="text-lg">
          <span className="font-bold">Science Kidz</span> is a company with an
          active maker community that provides a platform to foster creativity
          and innovation in the fields of electronics, robotics, and physical
          computing through a kit-based learning approach. Science Kidz&rsquo;s
          engineers and researchers believe that learning should be enjoyable
          and engaging, with the goal of fostering creativity and nurturing and
          encouraging a creator mentality in children.{" "}
          <span className="font-bold">
            Science Kidz mentors have also received awards as Coaches in a
            variety of national and international Robotics competitions where
            children have presented innovative projects.{" "}
          </span>{" "}
          With our wide range of kit-based technology courses, we hope to make
          technology more accessible to all while also bringing out the
          techno-creative spark in every child.
        </p>
        <br />
        <br />
        <p>
          <span className="font-bold">Website</span> -{" "}
          <Link
            href={"https://sciencekidz.in/"}
            className="underline text-blue-900 font-semibold"
          >
            https://sciencekidz.in/
          </Link>
        </p>
        <p>
          <span className="font-bold">
            Courses and Website for recorded and workshop Projects
          </span>{" "}
          -{" "}
          <Link
            href={"https://learn.sciencekidz.in/"}
            className="text-blue-900 underline font-semibold"
          >
            https://learn.sciencekidz.in/
          </Link>
        </p>
        <br />
        <br />
        <h3 className="text-xl font-semibold">Summary of Offerings</h3>
        <br />
        <h5 className="text-lg font-semibold pl-5">
          B2C offline at our centres
        </h5>
        <ul className="pl-10">
          <li>
            <p>
              - Robotics, STEM and coding courses for ages 5 and above with
              take-away kits <span className="italic">(optional)</span>.
            </p>
            <p>
              -{" "}
              <Link
                href={"https://sciencekidz.in/offline-programs/"}
                className="text-blue-900 font-semibold underline"
              >
                https://sciencekidz.in/offline-programs/
              </Link>{" "}
              <span className="italic">
                (Some details of these like fees and timeline will be
                restructured soon)
              </span>
              .
            </p>
            <p>
              - Custom workshops and camps at partner locations{" "}
              <span className="italic">(as per availability)</span>.
            </p>
            <p>
              - Coaching for exhibitions, national and international
              competitions (
              <Link
                href={"/https://www.youtube.com/watch?v=Whs7FJp0p48"}
                className="text-blue-900 underline font-semibold"
              >
                https://www.youtube.com/watch?v=Whs7FJp0p48
              </Link>
              ).
            </p>
          </li>
        </ul>
        <br />
        <br />
        <h5 className="text-lg font-semibold pl-5">
          B2C online - <span className="text-base">Ages 9 and above only</span>{" "}
          {"-> "}
          <Link
            href={"https://sciencekidz.in/online-programs/"}
            className="text-base underline text-blue-900 font-semibold"
          >
            https://sciencekidz.in/online-programs/
          </Link>
        </h5>
        <ul className="pl-10">
          <li>
            <p>
              - Robotics, STEM and coding courses with recorded courses on our
              portal{" "}
              <span className="italic">
                (Kits shipped nationally and internationally)
              </span>
              .
            </p>
            <p>
              - Robotics, STEM and coding courses with LIVE Online teaching
              <span className="italic">
                (Kits shipped nationally and internationally)
              </span>
            </p>
          </li>
        </ul>
        <br />
        <br />
        <h5 className="text-lg font-semibold pl-5">B2B</h5>
        <ul className="pl-10">
          <li>
            <p>
              - Robotics lab and curriculum support from Sr. Kg to Grade 12 for
              academic purposes{" "}
              <span className="italic">(schools and colleges)</span> with
              teacher training program{" "}
              <span className="italic">
                (deal negotiated based on school requirement and budgeting.)
              </span>
              .
            </p>
            <p>
              - Custom workshops and summer/winter camps{" "}
              <span className="italic">(as per need/availability)</span>
            </p>
          </li>
        </ul>
        <br />
        <br />
        <h3 className="text-lg font-semibold">Other Links</h3>
        <ul className="pl-5">
          <li>
            <p>
              - <span className="font-semibold">Our YOUTUBE channel</span> -{" "}
              <Link
                href={"https://www.youtube.com/@ScienceKidz/videos"}
                className="underline text-blue-900 font-semibold"
              >
                https://www.youtube.com/@ScienceKidz/videos
              </Link>
            </p>
            <p>
              - <span className="font-semibold">Instagram ID</span> –{" "}
              <Link
                href={"https://www.instagram.com/science.kidz"}
                className="underline text-blue-900 font-semibold"
              >
                @science.kidz
              </Link>
            </p>
            <p>
              -{" "}
              <span className="font-semibold">
                Demo/Trailer videos – Robotics Toolkit (Grades 5 and above)
              </span>{" "}
              -
              <Link
                href={"https://www.youtube.com/watch?v=-PC6duMpQpE"}
                className="text-blue-900 underline font-semibold"
              >
                https://www.youtube.com/watch?v=-PC6duMpQpE
              </Link>
            </p>{" "}
            <p>
              -{" "}
              <span className="font-semibold">
                Kits/projects for Grades 2-3
              </span>{" "}
              -
              <Link
                href="https://www.youtube.com/watch?v=iez5b04cOnA"
                className="underline text-blue-900 font-semibold"
              >
                https://www.youtube.com/watch?v=iez5b04cOnA
              </Link>
            </p>{" "}
            <p>
              - <span className="font-semibold">Kits/projects for Grades KG – 1</span> -
              <Link
                href="https://www.youtube.com/watch?v=QH-r3vdeHa8"
                className="text-blue-900 underline"
              >
                https://www.youtube.com/watch?v=QH-r3vdeHa8
              </Link>
            </p>{" "}
            <p>
              - <span className="font-semibold">Electronics – Grade 4+ (Online)</span> -
              <Link
                href="https://www.youtube.com/watch?v=FqnaUq6tCXc"
                className="underline text-blue-900 font-semibold"
              >
                https://www.youtube.com/watch?v=FqnaUq6tCXc
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
