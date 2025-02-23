export default function Pricing() {
  return (
    <>
      <section id="pricing" className="mt-10 px-10 md:px-20">
        <h1 className="text-center text-4xl font-bold pb-10">Pricing</h1>

        {/*Card Container*/}
        <div className="grid grid-cols-1 grid-rows-3 gap-10 md:gap-5 md:grid-rows-1 md:grid-cols-3 md:px-20">
          {/*Card 1*/}
          <div className="rounded border border-gray-200 px-4 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <h3 className="font-bold mb-5 text-gray-700 mt-5">Free</h3>

            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$0</span>
              <span className="ml-2 text-sm text-gray-700 ">per month</span>
            </div>

            <ul className=" text-gray-700 list-disc text-sm pl-6 space-y-2 mt-5 mb-5">
              <li>10 Resume Checks Per month.</li>
              <li>ATS Resume Analysis.</li>
              <li>Resume Tailoring For Job Applications.</li>
            </ul>
          </div>

          {/*Card 2*/}
          <div className="relative rounded border border-blue-200 px-4 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded font-medium">
                Most Popular
              </span>
            </div>

            <h3 className="font-bold mb-5 text-gray-800 mt-5">Monthly</h3>

            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$29.99</span>
              <span className="ml-2 text-sm text-gray-800">per month</span>
            </div>

            <ul className=" list-disc text-sm pl-6 space-y-2 mt-5 mb-5">
              <li>50 Resume Checks Per Month.</li>
              <li>Everything in Basic.</li>
              <li>Priority Support.</li>
              <li>Step-by-Step Guidance and Explanations.</li>
            </ul>
          </div>

          {/*Card 3*/}
          <div className="rounded border border-gray-200 shadow-xl px-4 hover:shadow-2xl transition-shadow duration-500">
            <h3 className="font-bold mb-5 text-gray-700 mt-5">Yearly</h3>

            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$19.99</span>
              <span className="ml-2 text-sm text-gray-700">per month</span>
            </div>

            <ul className=" text-gray-700 list-disc text-sm pl-6 space-y-2 mt-5 mb-5">
              <li>2 Months Free</li>
              <li>All Premium Features.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
