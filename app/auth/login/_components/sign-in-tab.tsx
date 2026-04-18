'use client';

import z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const signInSchema = z.object({
  email: z.email().min(1),
});

type SignInForm = z.infer<typeof signInSchema>;

export default function SignInTab() {
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
    },
  });

  const { isSubmitting } = form.formState;

  return (
    <div className="">
      <form action="">
        <FieldGroup>
          <div className="space-y-3">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    className="border bg-transparent"
                    type="email"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-white/2 rounded-full animate-spin" />
                  Continue..
                </>
              ) : (
                <span>Continue With Email</span>
              )}
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
