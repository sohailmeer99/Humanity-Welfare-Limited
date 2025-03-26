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
            <div style={{width:'100%',display:'flex',margin:'80px 0',justifyContent:'center'}}>
                <h1 style={{fontSize:'4rem', color:'#000',textDecoration:'underline'}}>Articles</h1>
            </div>
            <Article articleNumber = {0} img="/Humanity-Welfare-Limited/assets/4.jpg" />
            <Article articleNumber = {1} img="/Humanity-Welfare-Limited/assets/5.jpg"/>
            <Article articleNumber = {2} img="/Humanity-Welfare-Limited/assets/6.jpg"/>
        </div>
    );
}
export default Index;