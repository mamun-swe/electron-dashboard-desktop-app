import toast from 'react-hot-toast'

/** Success toast message */
const Success = ({ message }: { message: string }): void => {
  toast.success(message)
}

/** Error toast message */
const Error = ({ message }: { message: string }): void => {
  toast.error(message)
}

export const HotToast = {
  Success,
  Error
}
