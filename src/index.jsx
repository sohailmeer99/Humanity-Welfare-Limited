import NavbarF from "./components/navbar1";
import NavbarS from "./components/navbar2";
function Index(){
    return(
        <div>
            <NavbarF />
            <NavbarS />
            <div>
                <img style={{width:'100%',height:'65vh',objectFit:'cover'}} src="/Humanity-Welfare-Limited/assets/3.jpg" />
            </div>
        </div>
    );
}
export default Index;