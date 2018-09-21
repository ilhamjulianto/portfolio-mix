import React, { Component } from 'react';
import './portfolio.css';

export default class Portfolio extends Component {
	render() {
		return(
			<div>
				<div id="home" class="bg-full-page text-center">
				    <div class="overlay overlay-table py-5"></div>

				    
				    <nav class="navbar navbar-expand-sm navbar-dark nav-transparent">

				        
				        <a class="navbar-brand justify-content-start" href="">
				            <img src={require("./fontawesome/svgs/fire-white.svg")} height="30px" alt="" />
				        </a>

				        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				            <span class="navbar-toggler-icon"><hr/></span>
				        </button>
				            
				        
				        <div class="collapse navbar-collapse" id="navbarText">
				            
				            <ul class="navbar-nav justify-content-end">
				                <li class="nav-item">
				                    <a class="nav-link" href="#home">Home</a>
				                </li>
				                <li class="nav-item">
				                    <a class="nav-link" href="#about">About</a>
				                </li>
				                <li class="nav-item">
				                    <a class="nav-link" href="#advertising">Advertising</a>
				                </li>
				                <li class="nav-item">
				                    <a class="nav-link" href="#graphicexample">Graphic Examples</a>
				                </li>
				                <li class="nav-item">
				                    <a class="nav-link" href="#skills">Skills</a>
				                </li>
				                <li class="nav-item">
				                    <a class="nav-link" href="#portfolio">Portfolio</a>
				                </li>
				                <li class="nav-item">
				                    <a class="nav-link" href="#profile">Profile</a>
				                </li>
				            </ul>
				        </div>
				    </nav>



				    <div class="container v-align p-5 text-light">
				        <div class="middle justify-content-center">
				            <h1 class="text-center p-3 display-4 wrap" style={{fontFamily: 'portico'}}>MY PORTFOLIO</h1>
				            <hr class="hr-top"/>
				            <p class="p-3 display-5">
				                explore graphic design then become a front end, all about graphic design
				            </p>
				            <a href="#about">
				            <button class="btn btn-outline-light mt-5 px-4">Start</button>
				            </a>
				        </div>
				    </div>


				    </div>


				<main id="about" role="main">
				<div class="container p-5">
				        <div class="row">
				            <div class="mx-auto col-md-6 col-sm-12 order-md-2 mt-5">
				                <img src={require("./img/thumbs/graphic.jpg")} alt="" class="img-fluid" />
				            </div>
				            <div class="col-md-6 col-sm-12 order-md-1 text-center text-md-left pr-md-5">
				                <h1 class="display-4 d-block wrap my-5">GRAPHIC DESIGN</h1>
				                
				                <p class="lead">
				                    The process of visual communication and problem-solving through the use of typography, photography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously. Graphic designers create and combine symbols, images and text to form visual representations of ideas and messages. They use typography, visual arts and page layout techniques to create visual compositions. Common uses of graphic design include corporate design (logos and branding), editorial design (magazines, newspapers and books), wayfinding or environmental design, advertising, web design, communication design, product packaging and signage. 
				                </p>
				            </div>
				        </div>
				</div>
				</main>



				<div id="advertising" class="container-fluid p-5">
				    <div class="container mx-auto text-center">
				        <p class="display-3 wrap mb-3">ADVERTISING</p>
				        <p class="lead">
				            Commercial ads often seek to generate increased consumption of their products or services through "branding", which associates a product name or image with certain qualities in the minds of consumers. On the other hand, ads that intend to elicit an immediate sale are known as direct-response advertising. Non-commercial entities that advertise more than consumer products or services include political parties, interest groups, religious organizations and governmental agencies. Non-profit organizations may use free modes of persuasion, such as a public service announcement. Advertising may also be used to reassure employees or shareholders that a company is viable or successful. 
				        </p>
				    </div>
				</div>


				<div id="graphicexample" class="carousel slide" data-ride="carousel">
				        <ol class="carousel-indicators">
				          <li data-target="#graphicexample" data-slide-to="0" class="active"></li>
				          <li data-target="#graphicexample" data-slide-to="1"></li>
				          <li data-target="#graphicexample" data-slide-to="2"></li>
				        </ol>
				        <div class="carousel-inner">
				          <div class="carousel-item active">
				            <img class="d-block w-100" src={require("./img/thumbs/graphic-slide.png")} alt="First slide" />
				            <div class="carousel-caption d-none d-md-block">
				                <h1 class="align-text-top">GRAPHIC EXAMPLE</h1>
				            </div>
				          </div>
				          <div class="carousel-item">
				            <img class="d-block w-100" src={require("./img/thumbs/graphic-slide2.jpg")} alt="Second slide" />
				            <div class="carousel-caption d-none d-md-block">
				                <h1 class="align-text-top">GRAPHIC EXAMPLE</h1>
				            </div>
				          </div>
				          <div class="carousel-item">
				            <img class="d-block w-100" src={require("./img/thumbs/graphic-slide3.jpg")} alt="Third slide" />
				            <div class="carousel-caption d-none d-md-block">
				                <h1 class="align-text-top">GRAPHIC EXAMPLE</h1>
				            </div>
				          </div>
				        </div>
				        <a class="carousel-control-prev" href="#graphicexample" role="button" data-slide="prev">
				          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				          <span class="sr-only">Previous</span>
				        </a>
				        <a class="carousel-control-next" href="#graphicexample" role="button" data-slide="next">
				          <span class="carousel-control-next-icon" aria-hidden="true"></span>
				          <span class="sr-only">Next</span>
				        </a>
				</div>



				<div id="skills" class="container-fluid p-5">
				    <div class="container text-center pb-3 my-5">
				        <h1 class="display-3 mt-4 wrap">SKILLS</h1>
				    </div>
				    <div class="row">
				        <div class="col-md-4 col-sm-12 text-center">
				            <img class="mb-3 rotate" src={require("./fontawesome/svgs/pen-nib-blue.svg")} width="50px" height="50px" />
				            <h2>Graphic Design</h2>
				            <p class="mx-5 pt-4">
				                Having an advertising experience and having interned at an advertising company, experience Graphic Design Freelancers for 1 year. Mastering Adobe Photoshop, Adobe Illustrator, Corel Draw X7, Inkscape.
				            </p>
				        </div>
				        <div class="col-md-4 col-sm-12 text-center">
				            <img class="mb-3 rotate" src={require("./fontawesome/svgs/code-purple.svg")} width="60px" height="50px" />
				            <h2>Front End Web</h2>
				            <p class="mx-5 pt-4">
				                Have experience using HTML, CSS for 1 year, and is learning about Bootstrap, Javascript, etc.
				            </p>
				        </div>
				        <div class="col-md-4 col-sm-12 text-center">
				            <img class="mb-3 rotate" src={require("./fontawesome/svgs/tape-red.svg")} width="60px" height="50px" />
				            <h2>Video Editing</h2>
				            <p class="mx-5 pt-4">
				                Experience using Vegas Pro 13, After Effect, Adobe Premiere for 2 years. Most projects make Short Opening Videos and Effect Editing.
				            </p>
				        </div>
				    </div>
				</div>
				



				<div class="container-fluid" id="portfolio">
				        <div class="container">
				            <div class="container text-center pt-3">
				                <h1 class="display-3 mt-4 wrap">PORTFOLIO</h1>
				            </div>
				            <div class="row">
				                <div class="col-md-3 py-5 col-sm-12">
				                    <img class="img-fluid img-thumbnail" src={require("./img/thumbs/portfolio.jpg")}/>
				                    <div class="py-4">
				                        <img class="img-fluid img-thumbnail" src={require("./img/thumbs/portfolio3.jpg")}/>
				                    </div>
				                </div>
				                <div class="col-md-3 py-5 col-sm-12">
				                    <img class="img-fluid img-thumbnail" src={require("./img/thumbs/portfolio2.jpg")}/>
				                    <div class="py-4"><img class="img-fluid img-thumbnail" src={require("./img/thumbs/portfolio4.jpg")}/></div>
				                </div>
				                <div class="col-md-6 py-5 col-sm-12">
				                    <img class="img-fluid img-thumbnail h-83" src={require("./img/thumbs/portfolio5.jpg")}/>
				                </div>
				            </div>
				        </div>
				    </div>



				<div id="profile" class="bg-parallax text-light">
				    <div class="overlay-footer py-5">
				    <div class="container">
				        <div class="container text-center pt-3">
				            <h1 class="display-3 mt-4 wrap">PROFILE</h1>
				        </div>
				        <div class="row">
				            <div class="col-md-4 col-sm-12 col-xs-12 text-center text-md-left order-md-1 order-sm-2 order-xs-2">
				                <h3 class="my-3">Contact</h3>
				                <p>
				                    <img src={require("./fontawesome/svgs/brands/whatsapp-white.svg")} width="20px" height="20px" /> +62 895 3726 2581 7 <br/>
				                    <img src={require("./fontawesome/svgs/brands/github-white.svg")} width="20px" height="20px" /> ilhamjulianto <br/>
				                    <img src= {require("./fontawesome/svgs/regular/envelope-white.svg")} width="20px" height="20px" /> isembilang@gmail.com <br/>
				                </p>
				            </div>
				             <div class="col-md-4 col-sm-12 col-xs-12 text-center order-md-2 order-sm-1 order-xs-1">
				                <div class="py-3">
				                    <img class="rounded-circle border" src={require("./img/profile3.jpg")} width="200px" height="200px" alt="Profile"/>
				                </div>
				                <h4 class="m-3">Muhammad Ilham Julianto</h4>
				            </div>
				            <div class="col-md-4 col-sm-12 col-xs-12 text-center text-md-right order-md-3 order-sm-3 order-xs-3">
				                <h3 class="my-3">About</h3>
				                <p>
				                        Likes things related to graphic design, including Front End Developer.
				                        Want to become a UI / UX master and Front End Developer.
				                </p>
				            </div>
				        </div>
				    </div>
				</div>
				</div>



				<figure class="text-muted">
				    <div class="container-fluid p-2 p-md-4">
				        <ul class="nav">
				            <li class="nav-item">
				                <a class="nav-link text-dark" href="#">GitHub</a>
				            </li>
				            <li class="nav-item">
				                <a class="nav-link text-dark" href="#">Twitter</a>
				            </li>
				            <li class="nav-item">
				                <a class="nav-link text-dark" href="#">Examples</a>
				            </li>
				            <li class="nav-item">
				                <a class="nav-link text-dark" href="#profile">About</a>
				            </li>
				        </ul>
				        <p class="container-fluid">Designed and built with all the love in the world by Razer. Maintained by Razer with the help of our contributors.
				        <br/> Currently v0.0.1 Code licensed MySelf.</p>
				    </div>
				</figure>
			</div>
		)
	}
}