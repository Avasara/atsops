import Image from "next/image";

export default function Benefits() {
  return (
    <section id="benefits" className="mt-20 py-10 bg-gray-50 px-10 md:px-20">
      <h1 className="text-center text-4xl font-bold pb-10">Benefits</h1>

      {/*Card Container*/}
      <div className="grid grid-cols-1 grid-rows-3 gap-5 md:grid-rows-1 md:grid-cols-3 md:px-20">
        {/*Card 1*/}
        <div className="rounded border border-gray-300 px-4 shadow-lg">
          {/*Card Icon */}
          <div className=" flex justify-center mt-8 mb-8 border-gray-200">
            <Image
              src="/graduate.png"
              alt="Blub icons created by Shaharea - Flaticon"
              width={80}
              height={80}
            />
          </div>

          {/*Card Text*/}
          <div className=" mb-5">
            <h3 className="font-bold mt-2 mb-2 text-center"> Master ATS </h3>
            <p className="text-gray-700">
              You'll learn how ATS reads your resume. No more guessing games -
              understand what works and why.
            </p>
          </div>
        </div>

        {/*Card 2*/}
        <div className="rounded border border-gray-300 px-4 shadow-lg">
          {/*Card Icon */}
          <div className=" flex justify-center mt-8 mb-8">
            <Image
              src="/my-star.svg"
              alt="Blub icons created by Shaharea - Flaticon"
              width={80}
              height={80}
            />
          </div>

          {/*Card Text*/}
          <div className="mb-5">
            <h3 className="font-bold mt-2 mb-2 text-center">Stand Out</h3>
            <p className="text-gray-700">
              You're competing with thousands of candidates. Standing out is a
              neccessity.
            </p>
          </div>
        </div>

        {/*Card 3*/}
        <div className="rounded border border-gray-300 px-4 shadow-lg">
          {/*Card Icon */}
          <div className=" flex justify-center mt-8 mb-8 border-gray-200">
            <Image
              src="/handshake.png"
              alt="Blub icons created by Shaharea - Flaticon"
              width={80}
              height={80}
            />
          </div>

          {/*Card Text*/}
          <div className="mb-5">
            <h3 className="font-bold mt-2 mb-2 text-center">Get Hired</h3>
            <p className="text-gray-700">
              Make yourself stand out from the crowd. More visibility leads to
              more interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
