import {PageWrapper,Navigation,TimeLine,SearchContainer} from "./HomePageStyles"
import Header from "../../components/header/Header";
import SideNavigation from "../../components/sideNavigation/SideNavigation";
import  NewTweetComponent  from "../../components/new-tweet-component/newTweetComponent";

const HomePage=()=>{


    return(
        <PageWrapper>
        <Navigation>
            <SideNavigation/>
        </Navigation>
        <TimeLine>
        <Header title="Home"/>
        <NewTweetComponent/>
        </TimeLine>
        <SearchContainer></SearchContainer>
        </PageWrapper>
    )
}


export default HomePage