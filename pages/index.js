export default function HomePage() {
  const handleSchoolChange = (e) => {
    const value = e.target.value;
    if (value) {
      window.location.href = `/${value.toLowerCase()}`;
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-[#F9FAFB] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <a href="/" className="text-2xl font-bold" style={{ color: '#3A86FF' }}>
            InsideCampus
          </a>
          <a
            href="#school-selector"
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: '#3A86FF' }}
          >
            Go to School Hub
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-center px-6 pt-16 pb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Real answers from real students — before you even step on campus.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            InsideCampus connects admitted and prospective students to current college insiders.
          </p>
          <a
            href="#school-selector"
            className="inline-block px-6 py-3 rounded-md font-medium text-white"
            style={{ backgroundColor: '#3A86FF' }}
          >
            Explore Schools
          </a>
        </section>

        <section id="school-selector" className="max-w-4xl mx-auto px-6 py-12">
          <label htmlFor="school" className="block text-lg font-medium mb-2 text-gray-800">
            Choose your school
          </label>
          <select
            id="school"
            onChange={handleSchoolChange}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
          >
            <option value="">Select a school...</option>
            <option value="colby">Colby</option>
            <option value="bowdoin">Bowdoin</option>
            <option value="umass">UMass</option>
          </select>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What students are asking
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 bg-[#F9FAFB] rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-600">Colby '26</span>
                  <span className="text-sm text-gray-500">▲ 24</span>
                </div>
                <p className="font-medium text-gray-800 mb-2">
                  “How easy is it to switch majors at Colby?”
                </p>
                <p className="text-sm text-gray-600">
                  “Super straightforward — I filled out a form online and met with my advisor. Took less than a week.”
                </p>
              </div>

              <div className="p-6 bg-[#F9FAFB] rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-600">Bowdoin '25</span>
                  <span className="text-sm text-gray-500">▲ 18</span>
                </div>
                <p className="font-medium text-gray-800 mb-2">
                  “Is the dining hall really that good?”
                </p>
                <p className="text-sm text-gray-600">
                  “Yes — the mac & cheese bar on Fridays is legendary. You’ll miss it on breaks.”
                </p>
              </div>

              <div className="p-6 bg-[#F9FAFB] rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-600">UMass '24</span>
                  <span className="text-sm text-gray-500">▲ 32</span>
                </div>
                <p className="font-medium text-gray-800 mb-2">
                  “What’s freshman housing like at UMass?”
                </p>
                <p className="text-sm text-gray-600">
                  “Most first-years end up in Southwest. It’s social but loud — bring earplugs!”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#3A86FF] font-semibold uppercase tracking-wide mb-4">
              Trusted by over 1,000 admitted students
            </p>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic mb-4">
              “InsideCampus gave me the confidence to choose Bowdoin. The student answers felt like chatting with future classmates.”
            </blockquote>
            <span className="block text-gray-600">— Bowdoin '25</span>
          </div>
        </section>

        <section className="py-12" style={{ backgroundColor: '#FF8C66' }}>
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-bold text-white text-center md:text-left">
              Ready to dive deeper?
            </h3>
            <div className="flex gap-4">
              <a
                href="/colby"
                className="px-5 py-3 bg-white text-[#3A86FF] font-semibold rounded-md"
              >
                Ask a Question
              </a>
              <a
                href="/verify"
                className="px-5 py-3 bg-white text-[#3A86FF] font-semibold rounded-md"
              >
                Verify to Answer
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F9FAFB] border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <a href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-800">
              Privacy
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 InsideCampus</p>
        </div>
      </footer>
    </div>
  );
}
