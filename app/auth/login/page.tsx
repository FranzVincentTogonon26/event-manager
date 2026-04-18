'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

import SocialAuthButton from './_components/social-auth-buttons';
import SignInTab from './_components/sign-in-tab';
import SignUpTab from './_components/sign-up-tab';

type Tabs = 'sign-in' | 'sign-up' | 'email-verification' | 'forgot-password';

type LoginProps = {
  tab: Tabs;
};

export default function LoginPage({ tab }: LoginProps) {
  return (
    <DialogContent>
      <DialogTitle>
        <div className="flex justify-center items-center gap-2 py-2">
          <svg
            width="50"
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
          <span className="font-semibold text-2xl">Event Planner</span>
        </div>
      </DialogTitle>

      {tab === 'sign-in' && (
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-semibold">Sign In or Join Now!</h2>
            <span className="text-sm">
              Sign in or create your account to get started.
            </span>
          </div>
          <SignInTab />
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">
              OR CONTINUE WITH
            </span>
            <Separator className="flex-1" />
          </div>
          <div className="">
            <SocialAuthButton />
          </div>
        </div>
      )}

      {tab === 'sign-up' && (
        <Card className="w-full ">
          <CardHeader>
            <CardTitle className="text-2xl py-1">Sign Up</CardTitle>
            <CardDescription>Welcome Back</CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpTab />
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-3">
            <SocialAuthButton />
          </CardFooter>
        </Card>
      )}
    </DialogContent>
  );
}
