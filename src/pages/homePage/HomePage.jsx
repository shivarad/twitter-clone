import {PageWrapper,Navigation,TimeLine,SearchContainer} from "./HomePageStyles"
import Header from "../../components/header/Header";
import SideNavigation from "../../components/sideNavigation/SideNavigation";

const HomePage=()=>{


    return(
        <PageWrapper>
        <Navigation>
            <SideNavigation/>
        </Navigation>
        <TimeLine>
        <Header title="Home"/>
        </TimeLine>
        <SearchContainer></SearchContainer>
        </PageWrapper>
    )
}


export default HomePage