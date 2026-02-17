function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 w-full max-w-md shadow-2xl">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center bg-indigo-500/10 text-indigo-300 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-500/20">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
            Interface v2.0
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
            Tailwind <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">+</span> React
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Elevate your digital experiences with our <br />
            utility-first design system.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          {[
            { icon: "⚡", text: "Lightning Fast Performance" },
            { icon: "🎨", text: "Premium Design System" },
            { icon: "📱", text: "Fully Responsive Layout" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 text-sm">
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2 ml-1">
            Identity
          </label>
          <input
            type="text"
            placeholder="Enter your handle"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
          />
        </div>

        {/* Interaction Group */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-[0.98]">
            Get Started
          </button>
          <button className="w-full bg-white/5 text-slate-300 font-semibold py-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98]">
            Explore Docs
          </button>
        </div>

        {/* Dynamic Footer */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">
            Powered by _nsaaree 💙
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
