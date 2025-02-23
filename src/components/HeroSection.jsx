import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-10">
      <div className="flex px-10 md:px-20 justify-between gap-8">
        {/*Left Side*/}
        <div className="text-md md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 mt-5">
            Get Seen, Get Hired.
          </h1>
          <p className="mb-5 text-gray-700">
            Every dream job starts with getting noticed. Tired of sending
            resumes into the void? Let's help you stand out and turn that dream
            into reality.
          </p>
          <p className="mb-2 text-gray-700">Benefits Include:</p>
          <ul className=" text-gray-700 list-disc pl-6">
            <li>No More Guessing.</li>
            <li>Stand Out in Every Application.</li>
            <li>Give Yourself the Best Chance For Success.</li>
          </ul>

          {/*CTA*/}
          <div className="space-y-4">
            <button className="w-full md:w-auto bg-blue-600 mt-5 text-white px-3 py-3 rounded-lg hover:bg-blue-700">
              Get Noticed
            </button>
            <p className="text-lg font-bold">
              Limited Time Offer: 10% off a Premium Plan.
            </p>
          </div>
        </div>

        {/*Right Side*/}
        <div className="hidden justify-end mt-5 w-1/2 md:flex">
          <Image
            src="/check.png"
            alt="Hero illustration"
            width={500}
            height={500}
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
