'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/shadcn/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shadcn/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/shadcn/ui/field'
import { Input } from '@/shadcn/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/shadcn/ui/input-group'

const isProduction = process.env.NODE_ENV === 'production'

const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Required.')
    .max(32, 'Name must be at most 32 characters.'),
  email: z.email().min(1, 'Required.'),
  message: z
    .string()
    .min(10, 'Description must be at least 10 characters.')
    .max(100, 'Description must be at most 100 characters.'),
})

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    fetch('https://formspree.io/f/mykkyqrp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          toast.success('Form submitted successfully!')
          form.reset()
        } else {
          res.json().then((data) => {
            if (Object.hasOwn(data, 'errors')) {
              toast.error(
                data['errors']
                  .map((error: Error) => error['message'])
                  .join(', '),
              )
            } else {
              toast.error('Oops! There was a problem submitting your form!')
            }
          })
        }
      })
      .catch(() => {
        toast.error('Oops! There was a problem submitting your form!')
      })
  }

  return (
    <Card className='mx-auto w-full sm:max-w-md'>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>Get in contact with us.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id='form-reiki'
          onSubmit={
            isProduction
              ? form.handleSubmit(onSubmit)
              : (e) => {
                  e.preventDefault()
                }
          }
        >
          <FieldGroup>
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-reiki-name'>Name</FieldLabel>
                  <Input
                    {...field}
                    id='form-reiki-name'
                    aria-invalid={fieldState.invalid}
                    placeholder='John Doe'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-reiki-email'>Email</FieldLabel>
                  <Input
                    {...field}
                    id='form-reiki-email'
                    aria-invalid={fieldState.invalid}
                    placeholder='johndoe@example.com'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='message'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-reiki-message'>Message</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id='form-reiki-message'
                      placeholder="I'm interested in CRM implementation."
                      rows={6}
                      className='min-h-24 resize-none'
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align='block-end'>
                      <InputGroupText className='tabular-nums'>
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button type='button' variant='outline' onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type='submit' form='form-reiki'>
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
