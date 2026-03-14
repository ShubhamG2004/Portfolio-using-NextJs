export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#07101f]">
      <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-8 py-6 backdrop-blur-xl">
        <span className="h-4 w-4 animate-pulse rounded-full bg-cyan-300" />
        <span className="h-4 w-4 animate-pulse rounded-full bg-cyan-400 [animation-delay:160ms]" />
        <span className="h-4 w-4 animate-pulse rounded-full bg-amber-300 [animation-delay:320ms]" />
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-slate-200">
          Loading Portfolio
        </p>
      </div>
    </div>
  );
}
