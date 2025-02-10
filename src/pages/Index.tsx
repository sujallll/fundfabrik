
import { ArrowRight, Shield, Smartphone, CreditCard, PieChart } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in">
              Banking Made Simple
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
              Experience seamless banking with cutting-edge technology and personalized service.
            </p>
            <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 hover-lift"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">Experience banking that puts you first</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Secure Banking",
                description: "Bank with confidence knowing your money is protected",
              },
              {
                icon: Smartphone,
                title: "Mobile Banking",
                description: "Manage your accounts anytime, anywhere",
              },
              {
                icon: CreditCard,
                title: "Smart Cards",
                description: "Next-generation payment solutions",
              },
              {
                icon: PieChart,
                title: "Financial Insights",
                description: "Understand and optimize your spending",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-xl p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <feature.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive financial solutions for every need</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Personal Banking",
                description: "Everyday banking solutions tailored to your lifestyle",
                color: "bg-purple-50",
              },
              {
                title: "Business Banking",
                description: "Supporting your business growth with specialized services",
                color: "bg-blue-50",
              },
              {
                title: "Investment Banking",
                description: "Expert guidance for your investment portfolio",
                color: "bg-green-50",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className={`rounded-xl p-8 ${service.color} hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                quote: "The best banking experience I've ever had. Simple, fast, and secure.",
                author: "Sarah Johnson",
                role: "Small Business Owner",
              },
              {
                quote: "Their mobile banking app has transformed how I manage my finances.",
                author: "Michael Chen",
                role: "Tech Professional",
              },
              {
                quote: "Exceptional customer service and innovative solutions.",
                author: "Emily Davis",
                role: "Freelancer",
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="glass-card rounded-xl p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Personal</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Business</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Investments</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Terms</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Security</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">FAQs</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-gray-400 text-sm">
                Follow us on social media
              </p>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              © 2024 BankCo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
