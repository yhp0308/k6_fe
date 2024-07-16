import logo from '../logo.svg';
import './HelloCss.css'
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';

export default function HelloCss() {
  const apiKey = process.env.REACT_APP_MV_API ;
  console.log(apiKey)

  return (
    <div className="hellomain">
        <p>
            <img className="imgLogo" src = {logo} alt="logo" />
        </p>
        <HelloWhite />
        <HelloYellow />
    </div>
  )
}
