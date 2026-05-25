export default function TopBar() {
  return (
    <div className="w-full border-b-2 border-white/20 py-2.5 text-[11px] text-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span>Timing: 6:00am - 2:00pm</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href="tel:8881234567">(888)123-5678</a>
          <a href="mailto:info@example.com">info@example.com</a>
        </div>
      </div>
    </div>
  );
}
