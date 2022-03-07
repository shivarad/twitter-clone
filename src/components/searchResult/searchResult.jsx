import Avatar from "../Avatar/Avatar";
import { BsSearch } from "react-icons/bs";
import {
  ResultContainer,
  Header,
  Content,
  ResultContent,
} from "./searchResultStyles";

const SearchResult = ({ item }) => {
  return (
    <ResultContainer>
      <span>
        {item.profile_picture ? (
          <Avatar image={item.profile_picture} />
        ) : (
          <BsSearch style={{ width: "30px", height: "30px" }} />
        )}
      </span>
      <ResultContent>
        <Header>{item.user ? item.display_name : item.topic}</Header>
        <Content>
          {item.user ? "@" + item.user : item.count + " tweets"}
        </Content>
      </ResultContent>
    </ResultContainer>
  );
};

export default SearchResult;
