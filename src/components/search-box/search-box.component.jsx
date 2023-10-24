import './search-box.styles.css';

const SearchBox= ({className,placeholder,onChangeHandler})=>{
  return(
    <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
  );
}

// class SearchBox extends Component{
//     render(){
//        const {onChangeHandler, placeholder, className}=this.props;
//         return(
        //     <input
        //   className={className}
        //   type="search"
        //   placeholder={placeholder}
        //   onChange={onChangeHandler}
        // />
//         );
//     }

// }

export default SearchBox;