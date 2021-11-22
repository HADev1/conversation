import {useDispatch} from "react-redux";
import {debounce} from "lodash";
import {onSearchTextChanged} from "../../../store/search";
import {useState} from "react";
import {LoadingContext} from "../../../context/loading";

let debounceFunc;

export default function InputSearch() {
  const dispatch = useDispatch();
  const contextLoading = LoadingContext();
  const [search, setSearch] = useState("");

  const handleSearch = e => {
    e.persist();
    contextLoading.setLoading(true);
    setSearch(e.target.value);

    if (!debounceFunc) {
      debounceFunc = debounce(() => {
        contextLoading.setLoading(false);
        dispatch(onSearchTextChanged(e.target.value));
      }, 1000);
    }
    debounceFunc();
  };

  return (
    <div className="search">
      <div className="form-inline position-relative">
        <input
          type="search"
          className="form-control"
          id="conversations"
          placeholder="Search for conversations..."
          value={search}
          onChange={handleSearch}
        />
        <button type="button" className="btn btn-link loop">
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}