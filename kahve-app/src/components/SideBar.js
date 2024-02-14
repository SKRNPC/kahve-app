import Category from "./Category";
import SearchBar from "./SearchBar";

function Sidebar() {
  return (
    <>
      <div className="sidebar-css">
        <SearchBar />
        <Category />
      </div>
    </>
  );
}

export default Sidebar;
