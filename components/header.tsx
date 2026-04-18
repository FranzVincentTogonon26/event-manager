'use client';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';
import { MobileNav } from '@/components/mobile-nav';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import LoginPage from '@/app/auth/login/page';

export const navLinks = [
  {
    label: 'Features',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out',
        {
          'border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow':
            scrolled,
        }
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          }
        )}
      >
        <a
          className="rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
          href="#"
        >
          <div className="flex justify-center items-center gap-2">
            <svg
              width="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="#111827" />

              <path
                d="M7 6H13C15.2 6 17 7.8 17 10C17 12.2 15.2 14 13 14H7V6Z"
                stroke="#60A5FA"
                strokeWidth={2}
                fill="none"
              />

              <path d="M7 14V18" stroke="#60A5FA" strokeWidth={2} />

              <circle cx="18" cy="6" r="2" fill="#F59E0B" />
            </svg>
            <span className="font-semibold">Event Planner</span>
          </div>
        </a>
        <div className="hidden items-center gap-2 md:flex">
          <div>
            {navLinks.map((link) => (
              <Button asChild key={link.label} size="sm" variant="ghost">
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                Sign In
              </Button>
            </DialogTrigger>
            <LoginPage tab="sign-in" />
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">Get Started</Button>
            </DialogTrigger>
            <LoginPage tab="sign-up" />
          </Dialog>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
