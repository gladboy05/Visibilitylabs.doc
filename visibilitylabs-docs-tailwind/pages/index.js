
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="px-4 py-8 space-y-24 max-w-7xl mx-auto">
      <header className="flex items-center space-x-4">
        <img src="/logo.png" alt="VisibilityLabs Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold">VisibilityLabs</h1>
      </header>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
              <p className="text-gray-700">Description of feature {i + 1} goes here.</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <h2 className="text-3xl font-bold text-center mb-6">What Makes VisibilityLabs Different</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          This is where you'll describe what sets your project apart. Talk about your unique strategies, values,
          team, or offerings.
        </p>
      </motion.section>

      <motion.section className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </motion.section>

      <footer className="text-center mt-16 text-sm text-gray-500 border-t pt-6">
        <p>© 2025 VisibilityLabs. All rights reserved.</p>
        <p>Twitter | Telegram | Discord</p>
      </footer>
    </main>
  );
}
