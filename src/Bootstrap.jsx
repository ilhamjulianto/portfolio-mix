import React, { Component } from 'react';
import './Bootstrap.css';

export default class Bootstrap extends Component {
	render() {
		return(
<div>
			<nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'rebeccapurple', color: 'white'}}>

    <a class="navbar-brand mr-0 mr-md-2" href="#" aria-label="Bootstrap"><svg class="d-block" width="36" height="36" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg>
    </a>


    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><hr/></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Documentation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Examples</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Themes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Expo</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
      <a class="nav-link p-2" href="#" rel="noopener" aria-label="GitHub"><svg class="navbar-nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.36" focusable="false"><title>GitHub</title><path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" fill="currentColor" fill-rule="evenodd"></path></svg></a>
      <a class="nav-link p-2" href="#" rel="noopener" aria-label="Twitter"><svg class="navbar-nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 416.32" focusable="false"><title>Twitter</title><path d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92" fill="currentColor"></path></svg></a>
      <a class="nav-link p-2" href="#" rel="noopener" aria-label="Slack"><svg class="navbar-nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" focusable="false"><title>Slack</title><path fill="currentColor" d="M210.787 234.832l68.31-22.883 22.1 65.977-68.309 22.882z"></path><path d="M490.54 185.6C437.7 9.59 361.6-31.34 185.6 21.46S-31.3 150.4 21.46 326.4 150.4 543.3 326.4 490.54 543.34 361.6 490.54 185.6zM401.7 299.8l-33.15 11.05 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.38-68.36 22.92 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.43-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.5-13.92 2.87-29.06 16.78-33.56l33.12-11.03-22.1-65.9-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.48-13.93 2.89-29.07 16.81-33.58l33.15-11.05-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.46 34.38 68.36-22.92-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.47 34.42 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.87 29.06-16.78 33.56L329.7 194.6l22.1 65.9 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.88 29.07-16.81 33.57z" fill="currentColor"></path></svg></a>
      <a class="btn btn-outline-warning d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="#">Download</a>
    </div>

  </nav>



<main id="content" class="bd-masthead" role="main">
<div class="container">
    <div class="row align-items-center">

        
        <div class="col-6 mx-auto col-md-6 order-md-2">
            <img class="img-fluid mb-3 mb-md-0" src={require('./img/bootstrap-stack.png')} alt=""/>
        </div>

        
        <div class="col-md-6 order-md-1 text-center text-md-left pr-md-5">
            <h1 class="mb-3 bd-text-purple-bright">Bootstrap</h1>
            <p class="lead">
                    Build responsive, mobile-first projects on the web with the world's most popular front-end component library.
            </p>
            <p class="lead md-4">
                    Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.
            </p>
            
            <div class="d-flex flex-column flex-md flex-md-row lead mb-3">
                <a href="#" class="btn btn-lg btn-bd-primary mb-3 mb-md-0 mr-md-3">
                    Get Started
                </a>
                <a href="#" class="btn btn-lg btn-outline-secondary mb-3 mb-md-0 mr-md-3">
                    Download
                </a>
            </div>
            
            <p class="text-muted mb-0">Curently v4.1.3</p>
        </div>
    </div>
</div>
</main>

<div class="bd-masthead-followup row m-0 border border-white">
    <div class="col-12 col-md-4 p-5 p-md bg-light border-white">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="32" height="32" fill="none" stroke="currentcolor" stroke-width="2" class="text-primary mb-2" viewBox="0 0 32 32" stroke-linecap="round" stroke-linejoin="round">
            <title>Import icon</title><path d="M28 22v8H4v-8M16 4v20m-8-8l8 8 8-8"></path>
        </svg>
        <h3>Installation</h3>
        <p class="text-md-left">
            Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.
        </p>
        <figure class="highlight text-md-left"><pre><label class="dollar">$ </label><code class="language-sh" data-lang="sh">npm <span class="nb">install </span>bootstrap</code></pre></figure>
        <figure class="highlight text-md-left"><pre><label class="dollar">$ </label><code class="language-sh" data-lang="sh">gem <span class="nb">install </span>bootstrap <span class="nb">-v </span> 4.1.3</code></pre></figure>
        <hr class="half-rule" align="left"/>
        <a href="#" class="btn btn-outline-primary">Read installation docs</a>
    </div>
    <div class="col-12 col-md-4 p-5 p-md bg-light border-white">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="32" height="32" fill="none" stroke="currentcolor" stroke-width="2" class="text-primary mb-2" viewBox="0 0 32 32" stroke-linecap="round" stroke-linejoin="round">
            <title>Download icon</title><path d="M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4 5-4m-5-10v14"></path>
        </svg>
        <h3>BootstrapCDN</h3>
        <p class="text-md-left">
                When you only need to include Bootstrap's compiled CSS or JS, you can use <a href="#">BootstrapCDN</a>.
        </p>
        <h5>CSS only</h5>
        <figure class="highlight"><pre><code class="language-html" data-lang="html">&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"&gt;</code></pre></figure>
        <h5>JS, Popper.js, and jQuery</h5>
        <figure class="highlight">
        <pre>
<code class="language-html" data-lang="html">&lt;script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"&gt;&lt;script&gt;</code><br/>
<code class="language-html" data-lang="html">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"&gt;&lt;script&gt;</code><br/>
<code class="language-html" data-lang="html">&lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"&gt;&lt;script&gt;</code></pre></figure>
        <hr class="half-rule" align="left"/>
        <a href="#" class="btn btn-outline-primary">Explore the docs</a>
    </div>
    <div class="col-12 col-md-4 p-5 p-md bg-light border-white">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="32" height="32" fill="none" stroke="currentcolor" stroke-width="2" class="text-primary mb-2" viewBox="0 0 32 32" stroke-linecap="round" stroke-linejoin="round">
            <title>Lightning icon</title><path d="M18 13l8-11L8 13l6 6-8 11 18-11z"></path>
        </svg>
        <h3>Official Themes</h3>
        <p class="text-md-left">
            Take Bootstrap 4 to the next level with official premium themes—toolkits built on Bootstrap with new components and plugins, docs, and build tools.
        </p>
        <img src={require('./img/bootstrap-themes.png')} alt="" class="img-fluid mt-3 mx-auto"/>
        <hr class="half-rule" align="left"/>
        <a href="#" class="btn btn-outline-primary">Browse themes</a>
    </div>
</div>

<figure class="bd-footer text-muted">
    <div class="container-fluid p-3 p-md-5">
        <ul class="footer-links">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Examples</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <p>Designed and built with all the love in the world by @mdo and @fat. Maintained by the core team with the help of our contributors.</p>
        <p>Currently v4.1.3. Code licensed MIT, docs CC BY 3.0.</p>
    </div>
</figure>
</div>
		)
	}
}