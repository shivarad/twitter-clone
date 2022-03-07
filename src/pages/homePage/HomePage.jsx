import {
  PageWrapper,
  Navigation,
  TimeLine,
  SearchContainer,
} from "./HomePageStyles";
import Header from "../../components/header/Header";
import SideNavigation from "../../components/sideNavigation/SideNavigation";
import NewTweetComponent from "../../components/new-tweet-component/newTweetComponent";
import Tweets from "../../data/tweets.json";
import {  useState } from "react";
import { nanoid } from "nanoid";
import TweetComponent from "../../components/Tweetcomponent/TweetComponent";
import Search from "../../components/SearchComponent/Search";
import BottomNavigation from "../../components/bottomNavigation/bottomNavigation";

const HomePage = () => {
  const [tweets, setTweets] = useState(Tweets);
  const user = {
    id: "0",
    user: "shivarad",
    display_name: "Shiva Rad",
    profile_picture: "https://placeimg.com/50/50/people",
  };
  const addTweet = (tweet) => {
    const newTweet = {
      id: nanoid(),
      created_on: Date(Date.now()),
      content: tweet,
      user: "shivarad",
      comments_count: 0,
      retweets_count: 0,
      favorites_count: 0,
    };
    setTweets([...tweets, newTweet]);
  };

  return (
    <PageWrapper>
      <Navigation>
        <SideNavigation />
      </Navigation>
      <TimeLine >
        <Header title="Home" />
        <NewTweetComponent addTweet={addTweet} user={user} />
        {tweets
          .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
          .map((tweet) => (
            <TweetComponent key={tweet.id} tweet={tweet}  />
          ))}
        <BottomNavigation />
      </TimeLine>
      <SearchContainer>
        <Search />
      </SearchContainer>
    </PageWrapper>
  );
};

export default HomePage;
