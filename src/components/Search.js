import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchTerm }) => {
    const navigate = useNavigate()
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(term);
    navigate('/')

  };

  return (
    <div className="d-flex justify-content-center align-items-center mb-3">
<div className="w-50">
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <input className="form-control" type="text" onChange={handleChange} />
          <button className="btn btn-primary ms-2" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default Search;
