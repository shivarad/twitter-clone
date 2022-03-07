import { useEffect, useRef } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import {
  SearchBoxContainer,
  SearchBtn,
  SearchInput,
  ClearBtn,
  ResultsContainer,
} from "./SearchStyles";
import users from "../../data/users.json";
import topics from "../../data/topics.json";
import SearchResult from "../searchResult/searchResult";
import { nanoid } from "nanoid";

const Search = () => {
  const [ResultVisible, setResultVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [topicResults, setTopicResults] = useState(null);
  const [userResults, setUserResults] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (searchValue !== "") {
      setTopicResults(
        topics.filter((topic) =>
          topic.topic.toLowerCase().includes(searchValue)
        )
      );
      setUserResults(
        users.filter(
          (user) =>
            user.user.toLowerCase().includes(searchValue) ||
            user.display_name.toLowerCase().includes(searchValue)
        )
      );
    } else {
      setTopicResults(null);
      setUserResults(null);
    }
  }, [searchValue]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setResultVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setResultVisible]);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <SearchBoxContainer onClick={() => setResultVisible(true)}>
        <SearchBtn aria-label="Search">
          <BsSearch />
        </SearchBtn>
        <SearchInput
          placeholder="Search Twitter"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        {searchValue && (
          <ClearBtn
            onClick={() => {
              setSearchValue("");
            }}
          >
            <MdClose />
          </ClearBtn>
        )}
      </SearchBoxContainer>
      {ResultVisible && (
        <ResultsContainer ref={ref}>
          {!searchValue && <p>Try Searching for people or topics</p>}
          {topicResults
            ? topicResults.map((topic) => (
                <SearchResult key={nanoid()} item={topic} />
              ))
            : null}
          {userResults
            ? userResults.map((user) => (
                <SearchResult key={nanoid()} item={user} />
              ))
            : null}
        </ResultsContainer>
      )}
    </div>
  );
};

export default Search;
