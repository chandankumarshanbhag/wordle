import clsx from 'clsx'
import '../assets/toast.scss'

export default function Toast(props) {
  return (
    <div
    class={clsx({
        ["notification toast is-dark"]: true,
        ['visible']: Boolean(props.message),
    })}
    
  >
    <button class="delete"></button>
    {props.message}
  </div>
  )
}
