import React, { useState } from "react";
//MODULES
import { useHistory } from "react-router-dom";
//ICONS
import {
  faSearch,
  faBookmark,
  faChevronRight,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ searchText, setSearchText }) {
  let history = useHistory();
  const [showMore, setShowMore] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("collections");
    history.push("/");
  };

  const myAccount = () => {
    const id = localStorage.getItem("userID");
    history.push(`/user/${id}`);
  };

  return (
    <div className="nav">
      <input
        className={!searchText.length ? "search" : "search search-active"}
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      {!!searchText.length && (
        <FontAwesomeIcon
          onClick={() => {
            setSearchText("");
          }}
          className="moreIcon"
          icon={faTimes}
        />
      )}

      <span>
        {showMore && (
          <span>
            <h1 onClick={myAccount} className="logout">
              &nbsp; &nbsp;MyAccount
            </h1>
            <h1 onClick={logout} className="logout">
              &nbsp;Logout
            </h1>
          </span>
        )}
      </span>

      {showMore ? (
        <h1 className="moreIcon">
          <FontAwesomeIcon
            onClick={() => {
              setShowMore(false);
            }}
            icon={faChevronRight}
          />
        </h1>
      ) : (
        <h1 className="moreIcon">
          <FontAwesomeIcon
            onClick={() => {
              setShowMore(true);
            }}
            icon={faChevronLeft}
          />
        </h1>
      )}
      <h1>
        <FontAwesomeIcon icon={faBookmark} />
        &nbsp;{localStorage.getItem("user")}
      </h1>
    </div>
  );
}

export default Navbar;
