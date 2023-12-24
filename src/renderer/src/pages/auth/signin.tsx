import React, { useState } from 'react'
import { Card } from 'react-daisyui'
import { SignInForm } from '@renderer/components/forms/signin.form'
import { IRSignIn } from '@renderer/interfaces/auth.interface'
import { Images } from '@renderer/utility/images'
import { HotToast } from '@renderer/components/toaster'

export const SignIn: React.FC = (): JSX.Element => {
  const [isLoading, setLoading] = useState<boolean>(false)

  /** handle form submission */
  const handleSubmit = async (data: IRSignIn): Promise<void> => {
    setLoading(true)
    HotToast.Success({ message: 'Logged in to account' })
    HotToast.Error({ message: 'Invalid signing credentials.' })
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
              <p className="text-3xl font-bold mb-2">Sign In</p>
              <p className="text-sm text-slate-500">
                Signin to your account, using email & password.
              </p>
            </div>
            <SignInForm loading={isLoading} onSubmit={handleSubmit} />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
