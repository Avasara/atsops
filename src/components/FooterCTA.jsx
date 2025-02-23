import { Image } from "next/image";

export default function FooterCTA() {
  return (
    <>
      <section id="job-market" className="mt-20 bg-gray-50">
        <div className="max-w-4xl mx-auto py-10 px-6 text-center">
          <p className="text-3xl font-light leading-relaxed mb-6">
            99% Of Companies Today Use Applicant Tracking Systems.
          </p>

          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Even the most experienced professionals get filtered out if their
            resumes don't meet hiring system requirements. Having the right
            skills isn't enough anymore. You need to present them in a way that
            speaks to both the <strong>software</strong> and{" "}
            <strong>recruiter</strong>.
          </p>

          <p className="text-2xl font-medium">
            You've worked hard to build your career.
          </p>
          <p className="text-2xl font-medium mb-8">
            Don't let an automated system stand between you and your next
            opportunity.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Scan Now
          </button>
        </div>
      </section>
    </>
  );
}
