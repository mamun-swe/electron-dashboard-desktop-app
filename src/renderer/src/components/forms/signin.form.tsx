import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IRSignIn } from '@renderer/interfaces/auth.interface'
import { Button, Input } from 'react-daisyui'
import { Link } from 'react-router-dom'

type PropsTypes = {
  loading: boolean
  onSubmit: (data: IRSignIn) => void
}

export const SignInForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRSignIn>()

  const onSubmit: SubmitHandler<IRSignIn> = (data) => props.onSubmit(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <p className="text-sm mb-1 text-slate-500">
            Have no account?{' '}
            <Link to={'/signup'} className="underline">
              Create Account
            </Link>
          </p>
          <p className="text-sm text-slate-500">
            Forgot password?{' '}
            <Link to={'/reset'} className="underline">
              Reset
            </Link>
          </p>
        </div>
        <Button type="submit" color="primary" className="px-10" disabled={props.loading}>
          {props.loading ? 'Signing...' : 'Sign In'}
        </Button>
      </div>
    </form>
  )
}
