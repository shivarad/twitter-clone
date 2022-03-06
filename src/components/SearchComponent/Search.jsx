import { useEffect } from "react";
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

  useEffect(() => {
    if (searchValue !== "") {
      setTopicResults(
        topics.filter((topic) => topic.topic.includes(searchValue))
      );
      setUserResults(
        users.filter(
          (user) =>
            user.user.includes(searchValue) ||
            user.display_name.includes(searchValue)
        )
      );
    }
  }, [searchValue]);

  return (
    <div style={{ height: "100%" }}>
      <SearchBoxContainer>
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
      <ResultsContainer>
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
    </div>
  );
};

export default Search;
