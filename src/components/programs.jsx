function Programs(){
    return(
        <div className="programs" style={{backgroundColor:'red'}}>
            <div className="programs-div" style={{backgroundColor:'blue'}}>
                <div className="programs-heading" style={{textAlign: 'right'}}><h1><span>Humanity</span> Welfare Limited</h1></div>
                <div className="programs-links-img" style={{backgroundColor:'green'}}>
                    <div>
                        <div>
                            <div><h2>Useful Links</h2></div>
                            <div>
                                <ul style={{listStyleType:'none'}}>
                                    <li>Link 1</li>
                                    <li>Link 2</li>
                                    <li>Link 3</li>
                                    <li>Link 4</li>
                                    <li>Link 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="programs-img">
                    <img src="/Humanity-Welfare-Limited/assets/4.jpg" />
                    </div>
                </div>
                <div className="programs-donation" style={{backgroundColor:'yellow'}}>
                    <div><h1>Rs . 123</h1></div>
                    <div><p>Lorem ipsum dolor consectetur adipisicing elit. Repudiandae, eum nisi enim alias possimus optio quibusdam reiciendis tenetur incidunt itaque nostrum molestias modi. Corporis, eaque.</p></div>
                    <div><button>Donate</button></div>
                </div>
            </div>
        </div>
    )
}
export default Programs;