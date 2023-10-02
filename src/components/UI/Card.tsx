import { CardProps } from '../../modules/cards'
import './Card.css'

const Card = (props: CardProps) => {
  return (
    <div className="card" style={props.style}>{props.children}</div>
  )
}

export default Card