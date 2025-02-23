export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 mt-20">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Links */}
          <div className="flex justify-center space-x-8 mb-4">
            <a href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ATSOPS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
