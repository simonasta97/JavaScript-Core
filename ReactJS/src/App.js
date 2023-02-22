import './App.css';

function App() {
  return (
    <div>
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="object" id="object_one"></div>
                    <div className="object" id="object_two"></div>
                    <div className="object" id="object_three"></div>
                    <div className="object" id="object_four"></div>
                    <div className="object" id="object_five"></div>
                    <div className="object" id="object_six"></div>
                    <div className="object" id="object_seven"></div>
                    <div className="object" id="object_eight"></div>
                    <div className="object" id="object_big"></div>
                </div>
            </div>
        </div>

        <nav className="navbar navbar-default">
            <div className="container">

                <div className="navbar-header">
                    <a href="#"><img src="images/fitness.png" alt="Fitness" /></a>

                    <ul className="list-inline contact_info">
                        <li><a href=""><span className="fa fa-envelope"></span><p>hello@PSDFreebies.com</p></a></li>
                        <li><a href=""><span className="fa fa-phone"></span><p>85 26 37 48 59</p></a></li>
                        <li><a href=""><span className="fa fa-clock-o"></span><p>Mon - Sat : 9AM - 6PM</p></a></li>
                    </ul>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>					
                </div>

                <div className="collapse navbar-collapse navbar-right" id="nav" >
                    <ul className="nav">
                        <li role="presentation"><a href="#home">Home</a></li>
                        <li role="presentation"><a href="#about">About</a></li>
                        <li role="presentation"><a href="#features">Company</a></li>
                        <li role="presentation"><a href="#service">Our Services</a></li>
                        <li role="presentation"><a href="#coaches">Recent News</a></li>
                        <li role="presentation"><a href="#contact">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </nav>


        <header id="home">
            <div id="carousel" className="carousel slide" data-ride="carousel">

                
                <div className="carousel-inner" role="listbox">

                    <div className="item active">
                        <img src="images/slider_img.jpg" alt="Strong Body" />
                        <div className="carousel-caption photo_overlay">
                            <div className="container">
                                <div className="carousel_caption_inner">
                                    <h3>Build Your </h3>
                                    <h1>Body Strong</h1>

                                    <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend. </p>						
                                </div>						
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/slider_img.jpg" alt="Strong Body" />
                        <div className="carousel-caption photo_overlay">
                            <div className="container">
                                <div className="carousel_caption_inner">
                                    <h3>Build Your </h3>
                                    <h1>Body Strong</h1>

                                    <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend. </p>						
                                </div>						
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/slider_img.jpg" alt="Strong Body" />
                        <div className="carousel-caption photo_overlay">
                            <div className="container">
                                <div className="carousel_caption_inner">
                                    <h3>Build Your </h3>
                                    <h1>Body Strong</h1>

                                    <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend. </p>						
                                </div>						
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        <section id="about">
            <div className="container">
                <div className="row">

                    <div className="col-md-9">
                        <div className="about_content">
                            <img src="images/about_img.jpg" alt="" className="about_img" />
                            <h2>Ut enim ad minima veniam</h2>

                            <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend. Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend. Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque.</p>

                            <a href="#about" className="btn know_btn">Know More</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="yoga_content">
                            <div className="yoga">
                                <h3>Yoga <span>&xlarr;</span></h3>
                                <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum</p>

                                <a href="" className="btn link_btn">Know More</a>
                            </div>
                            <div className="yoga_banner">
                                <img src="images/yoga_img.jpg" alt="Yoga" className="yoga_img" />
                                <div className="photo_overlay"></div>
                            </div>					
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="features">
            <div className="container">
                <h2>Our features classNamees</h2>
                <p className="lead">checkout our fitness classNamees</p>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="feature_item">
                            <span className="flaticon flaticon-running"></span>
                            <h3>Weight Programs</h3>
                            <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa.</p>

                            <a href="#about" className="btn know_btn">Know More</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature_item">
                            <span className="flaticon flaticon-yoga-mat"></span>
                            <h3>Weight Programs</h3>
                            <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa.</p>

                            <a href="#about" className="btn know_btn">Know More</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature_item">
                            <span className="flaticon flaticon-weightlifting"></span>
                            <h3>Weight Programs</h3>
                            <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa.</p>

                            <a href="#about" className="btn know_btn">Know More</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section id="service">
            <div className="container">
                <h2>Body Sculpturing Program</h2>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="service_item">
                            <div className="service_photo">
                                <img src="images/program_img1.jpg" alt="Program" />
                                <div className="photo_overlay"></div>						
                            </div>
                            <div className="service_caption">
                                <h4>Body Sculpturing Program</h4>
                                <p>by Mark Freeman, Jan 15, 2017</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service_item">
                            <div className="service_photo">
                                <img src="images/program_img2.jpg" alt="Program" />
                                <div className="photo_overlay"></div>						
                            </div>
                            <div className="service_caption">
                                <h4>Body Sculpturing Program</h4>
                                <p>by Mark Freeman, Jan 15, 2017</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service_item">
                            <div className="service_photo">
                                <img src="images/program_img3.jpg" alt="Program" />
                                <div className="photo_overlay"></div>						
                            </div>
                            <div className="service_caption">
                                <h4>Body Sculpturing Program</h4>
                                <p>by Mark Freeman, Jan 15, 2017</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service_item">
                            <div className="service_photo">
                                <img src="images/program_img4.jpg" alt="Program" />
                                <div className="photo_overlay"></div>						
                            </div>
                            <div className="service_caption">
                                <h4>Body Sculpturing Program</h4>
                                <p>by Mark Freeman, Jan 15, 2017</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service_item">
                            <div className="service_photo">
                                <img src="images/program_img5.jpg" alt="Program" />
                                <div className="photo_overlay"></div>						
                            </div>
                            <div className="service_caption">
                                <h4>Body Sculpturing Program</h4>
                                <p>by Mark Freeman, Jan 15, 2017</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service_item">
                            <div className="service_photo">
                                <img src="images/program_img6.jpg" alt="Program" />
                                <div className="photo_overlay"></div>						
                            </div>
                            <div className="service_caption">
                                <h4>Body Sculpturing Program</h4>
                                <p>by Mark Freeman, Jan 15, 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="coaches" className="coaches">
            <div className="container">
                <div className="coaches_content">
                    <div className="size_120 no_photo coach_item">
                        <h3>Yoga</h3>
                    </div>
                    <div className="size_180 coach_item">
                        <img src="images/coach_img1.png" alt="Coach" />
                    </div>
                    <div className="size_270 coach_item">
                        <img src="images/coach_img2.png" alt="Coach" />
                    </div>
                    <div className="size_110 coach_item">
                        <img src="images/coach_img3.png" alt="Coach" />
                    </div>
                    <div className="size_195 coach_item">
                        <img src="images/coach_img4.png" alt="Coach" />
                    </div>
                    <div className="size_110 no_photo coach_item">
                        <h3>Yoga</h3>
                    </div>
                    <div className="size_135 coach_item">
                        <img src="images/coach_img5.png" alt="Coach" />
                    </div>
                    <div className="size_195 coach_item">
                        <img src="images/coach_img6.png" alt="Coach" />
                    </div>
                    <div className="size_180 coach_item">
                        <img src="images/coach_img7.png" alt="Coach" />
                    </div>
                    <div className="size_180 no_photo coach_item">
                        <h3>Gym</h3>
                    </div>
                    <div className="size_135 coach_item">
                        <img src="images/coach_img8.png" alt="Coach" />
                    </div>
                    <div className="size_195 coach_item">
                        <img src="images/coach_img9.png" alt="Coach" />
                    </div>
                    <div className="size_195 coach_item">
                        <img src="images/coach_img10.png" alt="Coach" />
                    </div>			
                </div>
            </div>
        </div>

        <footer id="contact">
            <div className="white_shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_us">
                            <div className="about_us_content">
                                <img src="images/footer_logo.png" alt="Fitness" />
                                <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quasoa molestias excepturi sintal occaecati cupiditate non provident similique sunt.</p>						
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="footer_right quick_link">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled footer_menu">
                                <li role="presentation"><a href="#">Home</a></li>
                                <li role="presentation"><a href="#about">About</a></li>
                                <li role="presentation"><a href="#company">Company</a></li>
                                <li role="presentation"><a href="#services">Our Services</a></li>
                                <li role="presentation"><a href="#service">Service</a></li>
                                <li role="presentation"><a href="#location">Location</a></li>
                                <li role="presentation"><a href="#news">Recent News</a></li>
                                <li role="presentation"><a href="#contact">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="footer_right">
                            <h3>Contact Us</h3>
                            <ul className="list-unstyled footer_contact_info">
                                <li><a href=""><span className="fa fa-map-marker"></span><p>hello@PSDFreebies.com</p></a></li>
                                <li><a href=""><span className="fa fa-phone"></span><p>85 26 37 48 59</p></a></li>
                                <li><a href=""><span className="fa fa-envelope"></span><p>Mon - Sat : 9AM - 6PM</p></a></li>
                            </ul>

                            <ul className="list-inline social">
                                <li><a href="" className="fa fa-facebook"></a></li>
                                <li><a href="" className="fa fa-twitter"></a></li>
                                <li><a href="" className="fa fa-linkedin"></a></li>
                                <li><a href="" className="fa fa-youtube"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center">
                    <p className="wow fadeInRight" data-wow-duration="1s">
                        Made with 
                        <i className="fa fa-heart"></i>
                        by 
                        <a target="_blank" href="http://bootstrapthemes.co">Bootstrap Themes</a> 
                        2016. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>



        <div className="scrollup">
            <a href="#"><i className="fa fa-chevron-up"></i></a>
        </div>
    </div>
  );
}

export default App;
