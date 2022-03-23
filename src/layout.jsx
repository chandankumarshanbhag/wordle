import Keyboard from './components/keyboard'

export default function Layout({children}) {
  return (
    <div className='main-layout'>
      <div className='logo'>
        <h1>Wordle</h1>
      </div>
        {children}
        <Keyboard />
    </div>
  )
}
