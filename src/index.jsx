import Navbar from './components/navbar'
import Programs from './components/programs';
function Index(){
    return(
        <div style={{position: 'relative'}}>
        <img src="/Humanity-Welfare-Limited/Assets/3.jpg" style={{width: '100%', height : '90vh', objectFit : 'cover'}} />

        <Navbar />
        <Programs />
        </div>
    );
}
export default Index;