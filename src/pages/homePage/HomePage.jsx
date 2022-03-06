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
import { useState } from "react";
import { nanoid } from "nanoid";
import TweetComponent from "../../components/Tweetcomponent/TweetComponent";
import Search from "../../components/SearchComponent/Search";

const HomePage = () => {
  const [tweets, setTweets] = useState(Tweets);
  const addTweet = (tweet) => {
    const newTweet = {
      id: nanoid(),
      created_on: Date(Date.now()),
      content: tweet,
      imageUrl: "",
      user: "shivarad",
      display_name: "Shiva Rad",
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
      <TimeLine>
        <Header title="Home" />
        <NewTweetComponent addTweet={addTweet} />
        {tweets
          .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
          .map((tweet) => (
            <TweetComponent key={tweet.id} tweet={tweet} />
          ))}
      </TimeLine>
      <SearchContainer>
        <Search/>
      </SearchContainer>
    </PageWrapper>
  );
};

export default HomePage;
