import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IRSignUp } from '@renderer/interfaces/auth.interface'
import { Button, Input } from 'react-daisyui'
import { Link } from 'react-router-dom'

type PropsTypes = {
  loading: boolean
  onSubmit: (data: IRSignUp) => void
}

export const SignUpForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRSignUp>()

  const onSubmit: SubmitHandler<IRSignUp> = (data) => props.onSubmit(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name input control */}
      <div className="mb-6">
        {errors.name && errors.name.message ? (
          <p className="text-sm mb-2 text-danger">{errors.name.message}</p>
        ) : (
          <p className="text-sm mb-2 text-slate-500">Your name.</p>
        )}
        <Input
          className="w-full"
          placeholder="John Wick"
          {...register('name', { required: 'Name is required' })}
        />
      </div>

      {/* E-mail input control */}
      <div className="mb-6">
        {errors.email && errors.email.message ? (
          <p className="text-sm mb-2 text-danger">{errors.email.message}</p>
        ) : (
          <p className="text-sm mb-2 text-slate-500">E-mail address.</p>
        )}
        <Input
          className="w-full"
          placeholder="example@gmail.com"
          {...register('email', { required: 'Email Address is required' })}
        />
      </div>

      {/* Password input control */}
      <div className="mb-6">
        {errors.password && errors.password.message ? (
          <p className="text-sm mb-2 text-danger">{errors.password.message}</p>
        ) : (
          <p className="text-sm mb-2 text-slate-500">Enter password.</p>
        )}
        <Input
          type="password"
          className="w-full"
          placeholder="********"
          {...register('password', { required: 'Password is required.' })}
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Already have an account?{' '}
            <Link to={'/'} className="underline">
              Signin
            </Link>
          </p>
        </div>
        <Button type="submit" color="primary" className="px-10" disabled={props.loading}>
          {props.loading ? 'Please wait...' : 'Sign Up'}
        </Button>
      </div>
    </form>
  )
}
