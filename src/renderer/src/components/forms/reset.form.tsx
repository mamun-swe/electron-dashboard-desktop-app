import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IRReset } from '@renderer/interfaces/auth.interface'
import { Button, Input } from 'react-daisyui'
import { Link } from 'react-router-dom'

type PropsTypes = {
  loading: boolean
  onSubmit: (data: IRReset) => void
}

export const ResetForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRReset>()

  const onSubmit: SubmitHandler<IRReset> = (data) => props.onSubmit(data)

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

      {/* Submit button */}
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Back to{' '}
            <Link to={'/'} className="underline">
              Sign in
            </Link>
          </p>
        </div>
        <Button type="submit" color="primary" className="px-10" disabled={props.loading}>
          {props.loading ? 'Please wait...' : 'Reset'}
        </Button>
      </div>
    </form>
  )
}
