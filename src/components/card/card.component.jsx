import "./card.styles.css";

const Card = ({monster}) => {

  const{ name, email, id }= monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${name}?set=set2&size=180x180`}
        alt={`monster ${id}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const {name,email,id} = this.props.monster;
// return (
// <div className="card-container" key={id}>
//       <img
//         src={`https://robohash.org/${name}?set=set2&size=180x180`}
//         alt={`monster ${id}`}
//       />
//       <h2>{name}</h2>
//       <p>{email}</p>
//     </div>
//     )
//   }
// }
export default Card;
