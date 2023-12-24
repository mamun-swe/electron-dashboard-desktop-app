import React, { useState } from 'react'
import { Card } from 'react-daisyui'
import { Images } from '@renderer/utility/images'
import { IRSignUp } from '@renderer/interfaces/auth.interface'
import { SignUpForm } from '@renderer/components/forms/signup.form'

export const SignUp: React.FC = (): JSX.Element => {
  const [isLoading, setLoading] = useState<boolean>(false)

  /** handle form submission */
  const handleSubmit = async (data: IRSignUp): Promise<void> => {
    setLoading(true)
    setTimeout(() => {
      console.log(data)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="grid h-screen place-items-center p-3">
      <div className="mx-auto w-full sm:w-[480px]">
        <Card className="bg-slate-900">
          <Card.Body>
            <div className="text-center mb-5">
              <img src={Images.Logo} alt="..." className="w-28 h-28 mx-auto" />
              <p className="text-3xl font-bold mb-2">Sign Up</p>
              <p className="text-sm text-slate-500">Create new account.</p>
            </div>
            <SignUpForm loading={isLoading} onSubmit={handleSubmit} />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
