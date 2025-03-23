import BackgroundImage from '../public/Assets/3.jpg'
import Navbar from './components/navbar'
import Programs from './components/programs';
function Index(){
    return(
        <div style={{position: 'relative'}}>
        <img src={BackgroundImage} style={{width: '100%', height : '90vh',objectFit : 'cover'}} />
        <Navbar />
        <Programs />
        </div>
    );
}
export default Index;