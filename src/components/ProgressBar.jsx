export default function ProgressBar({ current, total }) {
  const pct = total > 0 ? ((current + 1) / total) * 100 : 0;
  return (
    <div className="w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/60 shadow-inner ring-1 ring-white/40">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
