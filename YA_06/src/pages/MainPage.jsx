import Nav from "../components/Nav"
import SearchBar from "../components/SearchBar"
import Button from "../components/Button";
import H3 from "../components/H3";

function MainPage(){
    return(
        <div>
            <Nav/>
            <div>
                <SearchBar/>
                <Button text={"검색"}/>
            </div>
            <div>
                <H3 text={"전체 목록"}/>
                <Button text={"+"}/>
            </div>
        </div>
    )
}

export default MainPage;