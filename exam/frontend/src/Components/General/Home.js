import React, { useContext  } from 'react';
import {Link,useHistory} from 'react-router-dom';
import { UserContext } from '../UserContext';

function Home(){
    const history = useHistory();
    const {token,setToken} = useContext(UserContext);
    const handleLogout = () =>{
        
        console.log("hi");
        localStorage.removeItem("token");
        setToken(null);
        
        console.log(token);
        
        };
    return(
        <div>
       {  !token?
       <>    
        <div className="slider-area ">
            <div className="slider-active">
                {/* <!-- Single Slider --> */}
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7 col-md-8">
                                <div className="hero__caption">
                                    <span data-animation="fadeInLeft" data-delay=".2s">Online Exam Platform</span>
                                    <h1 data-animation="fadeInLeft" data-delay=".4s">Experience the best way of Online Exams</h1>
                                    {/* <!-- Hero-btn --> */}
                                    <div className="hero__btn">
                                       { !token ?  <Link to="/signin"> <button className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Login</button></Link>
                                       : <button  onClick={handleLogout}  className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Logout</button>
                                       }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="hero-man d-none d-lg-block f-right" data-animation="jello" data-delay=".4s">
                                    <img src="assets/img/hero/heroman.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Slider --> */}
                
            </div>
        </div>
    </>
    :
    <>
    { token && token.role==1 ?
    <>
    <div class="categories-area section-padding10">
            <div class="container">
                <div class="row justify-content-sm-center">
                    <div class="cl-xl-7 col-lg-8 col-md-10">
                        
                        <div class="section-tittle text-center mb-70">
                            <span>Hi {token.userName.toUpperCase()}</span>
                            <h2>Lets Get Started</h2>
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-web-design"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><Link  to="/createexam">Create Exam</Link></h5>
                                <p>Create an exam.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-education"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><Link  to="/createpaper">Create Paper</Link></h5>
                                <p>Create Mock Papers.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-business"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><Link  to="/exams">My Exams</Link></h5>
                                <p>See your created exams.</p>
                             
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-business"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><Link  to="/papers">My Mock Paper</Link></h5>
                                <p>See your created mock papers.</p>
                             
                            </div>
                        </div>
                    </div>
                   
                </div>
                
               
            </div>
        </div>
    </>
    :
    <>
    <div class="categories-area section-padding10">
            <div class="container">
                <div class="row justify-content-sm-center">
                    <div class="cl-xl-7 col-lg-8 col-md-10">
                        
                        <div class="section-tittle text-center mb-70">
                            <span>Hi {token.userName.toUpperCase()}</span>
                            <h2>Lets Get Started</h2>
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-web-design"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><Link  to="/allexams">All Exams</Link></h5>
                                <p>Explore the exams.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-education"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><Link  to="/myexams">My Exams</Link></h5>
                                <p>See the exams you have subscribed.</p>
                              
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-education"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><Link  to="/myattemptedpapers">My Attempted Papers</Link></h5>
                                <p>See the papers you have Attempted.</p>
                               
                            </div>
                        </div>
                    </div>
                   
                </div>
                
               
            </div>
        </div>
        <br></br><br></br>
    </>
    
    }
    </>
       } 
    </div>
    );
}

export default Home;