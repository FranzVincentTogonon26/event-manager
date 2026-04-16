import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-primary text-xl font-bold">
              Event Planner
            </Link>
          </div>
          <div className="">
            <Link href="/events">Events</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
