import "./Search.css"

const Search = () => {
  const [search, setSearch] = useState(data);
  console.log('search: ', search)
  
  const Filter = (event)=>{
    setSearch(data.filter((filter)=>filter.title.toLowerCase().includes(event.target.value)))
  }
  return (
    <div><img src={cart} alt="" />
    <input 
      type="text" 
      placeholder="busca tu producto" 
      className="search"
      onChange={Filter}
      /></div>
  )
}

export default Search