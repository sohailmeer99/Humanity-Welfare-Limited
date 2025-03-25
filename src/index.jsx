import NavbarF from "./components/navbar1";
import NavbarS from "./components/navbar2";
import Article from "./components/article";
function Index(){
    return(
        <div>
            <NavbarF />
            <NavbarS />
            <div>
                <img style={{width:'100%',height:'65vh',objectFit:'cover'}} src="/Humanity-Welfare-Limited/assets/3.jpg" />
            </div>
            <Article />
        </div>
    );
}
export default Index;