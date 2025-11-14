import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Supercharge Your SEO With the Ultimate All-In-One Optimization Tool
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Analyze your website, discover high-value keywords, and outperform your competitors—all in one powerful, easy-to-use platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/seo-analyzer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Start Free Analysis
            </Link>
            <Link to="/keyword-tool" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Try Keyword Research Tool
            </Link>
          </div>
          <p className="text-lg opacity-90">No signup required. 100% Free basic tools.</p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for creators, marketers, and businesses who want real SEO growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Without paying for overpriced tools. Our platform combines AI-powered keyword research, deep on-page SEO auditing, performance scoring, and competitor insights—all in one clean, fast interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">AI Keyword Discovery</h3>
              <p className="text-gray-600">Find long-tail, low-competition keywords powered by live autocomplete data & real search intent.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Complete SEO Analyzer</h3>
              <p className="text-gray-600">Check meta tags, headers, image alt tags, internal links, canonical tags, page structure & more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Performance Audit</h3>
              <p className="text-gray-600">Lighthouse-style scoring for speed, accessibility, best practices, and SEO.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📌</div>
              <h3 className="text-xl font-semibold mb-2">Competitor Insights</h3>
              <p className="text-gray-600">Scrape competitor pages legally & ethically using ZenRows to uncover keywords, meta strategies, and content structure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Instant Fix Recommendations</h3>
              <p className="text-gray-600">We show you exactly what to fix—with examples for immediate implementation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Keyword Clustering</h3>
              <p className="text-gray-600">Group keywords into topics for faster content planning and strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Is This Tool For?</h2>
            <p className="text-xl text-gray-600">If you want organic growth → this tool is for you.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">👨‍💻</div>
              <p className="font-semibold">Content Creators</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📈</div>
              <p className="font-semibold">SEO Professionals</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💼</div>
              <p className="font-semibold">Freelancers</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🏢</div>
              <p className="font-semibold">Small Businesses</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🛠️</div>
              <p className="font-semibold">Agencies</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⚙️</div>
              <p className="font-semibold">Developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Tool */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Tool?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-2">✔</div>
              <p className="font-semibold">100% Free basic usage</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <p className="font-semibold">Uses fast + reliable ZenRows API</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚛️</div>
              <p className="font-semibold">Built on modern tech (React, Tailwind, Node, Vite)</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <p className="font-semibold">Clean UX designed for productivity</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <p className="font-semibold">No account required</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <p className="font-semibold">Safe, secure, and fast</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Enter Your Website or Keyword</h3>
              <p className="text-gray-600">Just paste your URL or topic.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Our Engine Analyzes Everything</h3>
              <p className="text-gray-600">ZenRows scrapes → backend analyzes → frontend displays results.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Get Actionable Recommendations</h3>
              <p className="text-gray-600">Follow our simple instructions to improve your ranking.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">4️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Grow Your Traffic Organically</h3>
              <p className="text-gray-600">Consistent improvement = long-term SEO success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">"Perfect lightweight alternative to expensive SEO tools."</p>
              <p className="font-semibold">- Content Creator</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">"A must-have tool for freelancers and website owners."</p>
              <p className="font-semibold">- SEO Professional</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">"Fast, accurate, and extremely easy to use."</p>
              <p className="font-semibold">- Small Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Starter – Free</h3>
              <ul className="text-left mb-6">
                <li>✔ Keyword search</li>
                <li>✔ SEO audit</li>
                <li>✔ Export basic reports</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Get Started Free
              </button>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Pro – $9/mo</h3>
              <ul className="text-left mb-6">
                <li>✔ Unlimited scans</li>
                <li>✔ Competitor analysis</li>
                <li>✔ PDF exports</li>
                <li>✔ Keyword clustering</li>
                <li>✔ Priority processing</li>
              </ul>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your SEO?</h2>
          <p className="text-xl mb-8">Boost rankings. Discover keywords. Analyze competitors.</p>
          <Link to="/seo-analyzer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Start Free SEO Analysis
          </Link>
          <p className="text-lg mt-4 opacity-90">No account needed.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
