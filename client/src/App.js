import React from 'react';
import axios from 'axios';
import MapApp from './components/maps';

import './App.css';

class App extends React.Component {
	state = {
		search: "",
		results: []
	};
	componentDidMount() {
		axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychiatrist&location=ma-boston&skip=0&limit=10&user_key=c2bf38244d2c83668b55c0be214bbbab`
		).then((result) => {
			console.log(result.data.data)
			// alert(JSON.stringify(result.data), null, 2)
			this.setState({
				results: result.data.data
			})
		})
	}





	render() {
		return (
			<div className="App">
				<header id="home">
					<div className="bg-img" style={{ backgroundImage: "url('./img/view.jpg')" }}>
						<div className="overlay"></div>
					</div>
					<nav id="nav" className="navbar nav-transparent">
						<div className="container">
							<div className="navbar-header">
								<div className="navbar-brand">
									{/* <a href="index.html">
										<img className="logo" src="" alt="logo" />

									</a> */}
								</div>

								<div className="nav-collapse">
									<span></span>
								</div>
							</div>

							<ul className="main-nav nav navbar-nav navbar-right">
								<li><a href="#home">Home</a></li>
								<li><a href="#about">About</a></li>
								<li><a href="#portfolio">Portfolio</a></li>
								<li><a href="#service">Services</a></li>
								<li><a href="#team">Team</a></li>
								<li><a href="#blog">Blog</a></li>

								<li><a href="#contact">Contact</a></li>
							</ul>

						</div>
					</nav>
					<div className="home-wrapper">
						<div className="container">
							<div className="row">

								<div className="col-md-10 col-md-offset-1">
									<div className="home-content">
										<h1 className="white-text">PRYIA</h1>
										<h3 className="white-text">A community that is trying to help people take control of there life's. </h3>
									</div>
								</div>

							</div>
						</div>
					</div>

				</header>

				<div id="about" className="section md-padding">

					<div className="container">

						<div className="row">

							<div className="section-header text-center">
								<h2 className="title">Welcome to PRYIA</h2>
							</div>
							<div className="col-md-4">
								<div className="about">
									<i className="fa fa-cogs"></i>
									<h3>24hr Support Team</h3>
									<p>Talking with one of our life coaches anytime of the day  </p>
									{/* <a href="#">Read more</a> */}
								</div>
							</div>

							<div className="col-md-4">
								<div className="about">
									<i className="fa fa-magic"></i>
									<h3>Awesome Features</h3>
									<p>Access to our network of Doctors that are closest to you using google maps.</p>
									{/* <a href="#">Read more</a> */}
								</div>
							</div>

							<div className="col-md-4">
								<div className="about">
									<i className="fa fa-mobile"></i>
									<h3>Chat Feature</h3>
									<p> We live in a time where you cant go anywhere with out your phone. Now let it help you take control of your life. </p>
									{/* <a href="#">Read more</a> */}
								</div>
							</div>

						</div>

					</div>

				</div>


				<div id="portfolio" className="section md-padding bg-grey">

					<div className="container">

						<div className="row">

							<div className="section-header text-center">
								<h2 className="title">Featured Works</h2>
							</div>

							<div className="col-md-4 col-xs-6 work">
								<img className="img-responsive" src="./img/meetingofminds.jpg" alt="" />
								<div className="overlay"></div>
								<div className="work-content">
									<span>Team Huddle </span>
									<h3>Meeting of the minds</h3>
									<div className="work-link">
										<a href="https://whatsupyukon.com/events/Drop-in%20Recovery%20Group%20Meetings/"><i className="fa fa-external-link"></i></a>
										<a className="lightbox" href="./img/meetingofminds.jpg"><i className="fa fa-search"></i></a>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-xs-6 work">
								<img className="img-responsive" src="./img/helpinghands.jpg" alt="" />
								<div className="overlay"></div>
								<div className="work-content">
									<span>Life Coach Meetings </span>
									<h3>Helping Where We Can </h3>
									<div className="work-link">
										<a href="https://metro.co.uk/2018/05/17/things-are-improving-immensely-heres-what-happens-at-a-mental-health-support-group-7535222/"><i className="fa fa-external-link"></i></a>
										<a className="lightbox" href="./img/helpinghands.jpg"><i className="fa fa-search"></i></a>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-xs-6 work">
								<img className="img-responsive" src="./img/together.jpg" alt="" />
								<div className="overlay"></div>
								<div className="work-content">
									<span>Together</span>
									<h3>Never Alone</h3>
									<div className="work-link">
										<a href="https://www.nami.org/Personal-Stories/You-Are-Not-Alone"><i className="fa fa-external-link"></i></a>
										<a className="lightbox" href="./img/together.jpg"><i className="fa fa-search"></i></a>
									</div>
								</div>
							</div>

							{/* <div className="col-md-4 col-xs-6 work">
								<img className="img-responsive" src="./img/work4.jpg" alt="" />
								<div className="overlay"></div>
								<div className="work-content">
									<span>Category</span>
									<h3>Lorem ipsum dolor</h3>
									<div className="work-link">
										<a href="#"><i className="fa fa-external-link"></i></a>
										<a className="lightbox" href="./img/work4.jpg"><i className="fa fa-search"></i></a>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 col-xs-6 work">
								<img className="img-responsive" src="./img/park.jpg" alt="" />
								<div className="overlay"></div>
								<div className="work-content">
									<span>Category</span>
									<h3>Lorem ipsum dolor</h3>
									<div className="work-link">
										<a href="#"><i className="fa fa-external-link"></i></a>
										<a className="lightbox" href="./img/park.jpg"><i className="fa fa-search"></i></a>
									</div>
								</div>
							</div> */}

							{/* <div className="col-md-4 col-xs-6 work">
								<img className="img-responsive" src="./img/work6.jpg" alt="" />
								<div className="overlay"></div>
								<div className="work-content">
									<span>Category</span>
									<h3>Lorem ipsum dolor</h3>
									<div className="work-link">
										<a href="#"><i className="fa fa-external-link"></i></a>
										<a className="lightbox" href="./img/work6.jpg"><i className="fa fa-search"></i></a>
									</div>
								</div>
							</div> */}

						</div>

					</div>

				</div>

				<div id="service" className="section md-padding">

					<div className="container">

						<div className="row">

							<div className="section-header text-center">
								<h2 className="title">What we offer</h2>
							</div>

							<div className="col-md-4 col-sm-6">
								<div className="service">
									<i className="fa fa-diamond"></i>
									<h3>Google Maps</h3>
									<p>Locations of Doctors under our umbrella that have the same vision </p>
								</div>
							</div>

							<div className="col-md-4 col-sm-6">
								<div className="service">
									<i className="fa fa-rocket"></i>
									<h3>Updates </h3>
									<p>Change the scope of how you think Mental Health should be supported.</p>
								</div>
							</div>

							<div className="col-md-4 col-sm-6">
								<div className="service">
									<i className="fa fa-cogs"></i>
									<h3>Creative Ideas</h3>
									<p>Always looking outside the box of normal healthcare practices.</p>
								</div>
							</div>


							{/* 
							<div className="col-md-4 col-sm-6">
								<div className="service">
									<i className="fa fa-diamond"></i>
									<h3>Marketing</h3>
									<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
								</div>
							</div>

							<div className="col-md-4 col-sm-6">
								<div className="service">
									<i className="fa fa-pencil"></i>
									<h3>mas</h3>
									<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
								</div>
							</div>

							<div className="col-md-4 col-sm-6">
								<div className="service">
									<i className="fa fa-flask"></i>
									<h3>Brand Design</h3>
									<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
								</div>
							</div> */}

						</div>

					</div>

				</div>


				{/* <div id="features" className="section md-padding bg-grey">

					<div className="container">

						<div className="row">
							<div className="col-md-6">
								<div className="section-header">
									<h2 className="title">Why Choose Us</h2>
								</div>
								<p>Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris. Ultrices sagittis orci a scelerisque purus.</p>
								<div className="feature">
									<i className="fa fa-check"></i>
									<p>Quis varius quam quisque id diam vel quam elementum.</p>
								</div>
								<div className="feature">
									<i className="fa fa-check"></i>
									<p>Mauris augue neque gravida in fermentum.</p>
								</div>
								<div className="feature">
									<i className="fa fa-check"></i>
									<p>Orci phasellus egestas tellus rutrum.</p>
								</div>
								<div className="feature">
									<i className="fa fa-check"></i>
									<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
								</div>
							</div>

							<div className="col-md-6">
								<div id="about-slider" className="owl-carousel owl-theme">
									<img className="img-responsive" src="./img/about1.jpg" alt="" />
									<img className="img-responsive" src="./img/about2.jpg" alt="" />
									<img className="img-responsive" src="./img/about1.jpg" alt="" />
									<img className="img-responsive" src="./img/about2.jpg" alt="" />
								</div>
							</div>

						</div>

					</div>

				</div> */}


				<div id="numbers" className="section sm-padding">

					<div className="bg-img" style={{ backgroundImage: "url('./img/background2.jpg')" }}>
						<div className="overlay"></div>
					</div>
				</div>
				{/* <div className="container">

						<div className="row">

							<div className="col-sm-3 col-xs-6">
								<div className="number">
									<i className="fa fa-users"></i>
									<h3 className="white-text"><span className="counter">451</span></h3>
									<span className="white-text">Happy clients</span>
								</div>
							</div>

							<div className="col-sm-3 col-xs-6">
								<div className="number">
									<i className="fa fa-trophy"></i>
									<h3 className="white-text"><span className="counter">12</span></h3>
									<span className="white-text">Awards won</span>
								</div>
							</div>

							<div className="col-sm-3 col-xs-6">
								<div className="number">
									<i className="fa fa-coffee"></i>
									<h3 className="white-text"><span className="counter">154</span>K</h3>
									<span className="white-text">Cups of Coffee</span>
								</div>
							</div>
							<div className="col-sm-3 col-xs-6">
								<div className="number">
									<i className="fa fa-file"></i>
									<h3 className="white-text"><span className="counter">45</span></h3>
									<span className="white-text">Projects completed</span>
								</div>
							</div>

						</div>

					</div>

				</div> */}

				{/* <div id="pricing" className="section md-padding">

					<div className="container">

						<div className="row">

							<div className="section-header text-center">
								<h2 className="title">Pricing Table</h2>
							</div>

							<div className="col-sm-4">
								<div className="pricing">
									<div className="price-head">
										<span className="price-title">Basic plan</span>
										<div className="price">
											<h3>$9<span className="duration">/ month</span></h3>
										</div>
									</div>
									<ul className="price-content">
										<li>
											<p>1GB Disk Space</p>
										</li>
										<li>
											<p>100 Email Account</p>
										</li>
										<li>
											<p>24/24 Support</p>
										</li>
									</ul>
									<div className="price-btn">
										<button className="outline-btn">Purchase now</button>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="pricing">
									<div className="price-head">
										<span className="price-title">Silver plan</span>
										<div className="price">
											<h3>$19<span className="duration">/ month</span></h3>
										</div>
									</div>
									<ul className="price-content">
										<li>
											<p>1GB Disk Space</p>
										</li>
										<li>
											<p>100 Email Account</p>
										</li>
										<li>
											<p>24/24 Support</p>
										</li>
									</ul>
									<div className="price-btn">
										<button className="outline-btn">Purchase now</button>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="pricing">
									<div className="price-head">
										<span className="price-title">Gold plan</span>
										<div className="price">
											<h3>$39<span className="duration">/ month</span></h3>
										</div>
									</div>
									<ul className="price-content">
										<li>
											<p>1GB Disk Space</p>
										</li>
										<li>
											<p>100 Email Account</p>
										</li>
										<li>
											<p>24/24 Support</p>
										</li>
									</ul>
									<div className="price-btn">
										<button className="outline-btn">Purchase now</button>
									</div>
								</div>
							</div>

						</div>

					</div>

				</div> */}


				<div id="testimonial" className="section md-padding">

					<div className="bg-img" style={{ backgroundImage: "url('./img/background3.jpg')" }}>
						<div className="overlay"></div>
					</div>

					<div className="container">

						<div className="row">

							<div className="col-md-10 col-md-offset-1">
								<div id="testimonial-slider" className="owl-carousel owl-theme">

									<div className="testimonial">
										<div className="testimonial-meta">
											<img src="./img/perso1.jpg" alt="" />
											<h3 className="white-text">John Doe</h3>
											<span>Web Designer</span>
										</div>
										<p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
									</div>

									<div className="testimonial">
										<div className="testimonial-meta">
											<img src="./img/perso2.jpg" alt="" />
											<h3 className="white-text">John Doe</h3>
											<span>Web Designer</span>
										</div>
										<p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
									</div>

								</div>
							</div>

						</div>

					</div>

				</div>

				<div id="team" className="section md-padding">
					<MapApp />
					{/* <div className="list">
						<ul>{this.state.results.map(result =>
							<li>{result.profile.first_name + " " + result.profile.last_name};


							</li>)}

						</ul>
					</div> */}


					<div className="container">



						<div className="row">

							<div className="section-header text-center">
								<h2 className="title">Our Team</h2>
							</div>

							<div className="col-sm-4">
								<div className="team">
									<div className="team-img">
										<img className="img-responsive" src="./img/Dubois.jpg" alt="" />
										{/* <div className="overlay">
											<div className="team-social">
												<a href="#"><i className="fa fa-facebook"></i></a>
												<a href="#"><i className="fa fa-google-plus"></i></a>
												<a href="#"><i className="fa fa-twitter"></i></a>
											</div>
										</div> */}
									</div>
									<div className="team-content">
										<h3>W. E. B. Du Bois</h3>
										<span>CFO</span>
									</div>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="team">
									<div className="team-img">
										<img className="img-responsive" src="./img/CFO.jpg" alt="" />
										<div className="overlay">
											{/* <div className="team-social">
												<a href="#"><i className="fa fa-facebook"></i></a>
												<a href="#"><i className="fa fa-google-plus"></i></a>
												<a href="#"><i className="fa fa-twitter"></i></a>
											</div> */}
										</div>
									</div>
									<div className="team-content">
										<h3>Eddie Claude</h3>
										<span>CEO</span>
									</div>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="team">
									<div className="team-img">
										<img className="img-responsive" src="./img/cto.jpg" alt="" />
										{/* <div className="overlay">
											<div className="team-social">
												<a href="#"><i className="fa fa-facebook"></i></a>
												<a href="#"><i className="fa fa-google-plus"></i></a>
												<a href="#"><i className="fa fa-twitter"></i></a>
											</div>
										</div> */}
									</div>
									<div className="team-content">
										<h3>John Stamp</h3>
										<span>CTO</span>
									</div>
								</div>
							</div>

						</div>

					</div>

				</div>

				<div id="blog" className="section md-padding bg-grey">

					<div className="container">

						<div className="row">

							<div className="section-header text-center">
								<h2 className="title">Recents news</h2>
							</div>

							<div className="col-md-4">
								<div className="blog">
									<div className="blog-img">
										<img className="img-responsive" src="./img/blog1.jpg" alt="" />
									</div>
									<div className="blog-content">
										<ul className="blog-meta">
											<li><i className="fa fa-user"></i>Achea Redd</li>
											<li><i className="fa fa-clock-o"></i>8/26/2019</li>
											<li><i className="fa fa-comments"></i>57</li>
										</ul>
										<h3>How Labels Impacted My Mental Health</h3>
										<p>All I knew were labels. They dictated how I acted, what I wore, where I went and how I spent my time. Labels come with expectations, most of which are not healthy. I became so caught up in the roles and titles that meeting expectations became more important than the experience  </p>
										<a href="https://www.nami.org/Blogs/NAMI-Blog/August-2019/How-Labels-Impacted-My-Mental-Health">Read more</a>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="blog">
									<div className="blog-img">
										<img className="img-responsive" src="./img/blog2.jpg" alt="" />
									</div>
									<div className="blog-content">
										<ul className="blog-meta">
											<li><i className="fa fa-user"></i>Aid Veterans </li>
											<li><i className="fa fa-clock-o"></i> 4/26/2019</li>
											<li><i className="fa fa-comments"></i>57</li>
										</ul>
										<h3>Mental Health and Teens: Watch for Danger Signs</h3>
										<p>Adolescence isn’t an easy time for parents, either. As children move through the various tumultuous transitions that accompany adolescence — physical, emotional, hormonal, sexual, social, intellectual — the pressures and problems they encounter can all too easily seem overwhelming</p>
										<a href="https://www.healthychildren.org/English/ages-stages/teen/Pages/Mental-Health-and-Teens-Watch-for-Danger-Signs.aspx">Read more</a>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="blog">
									<div className="blog-img">
										<img className="img-responsive" src="./img/blog3.jpg" alt="" />
									</div>
									<div className="blog-content">
										<ul className="blog-meta">
											<li><i className="fa fa-user"></i>Aid Veterans </li>
											<li><i className="fa fa-clock-o"></i>822/2019</li>
											<li><i className="fa fa-comments"></i>57</li>
										</ul>
										<h3>New Technology to Aid Veterans Mental Health</h3>
										<p>Of the 1.7 million veterans who served in Iraq and Afghanistan, it is estimated that 20 percent live with post-traumatic stress disorder or major depression. These conditions can have a significant impact on returning vets’ relationships, and their school or work performance.</p>
										<a href="https://www.eachmindmatters.org/from-the-front-lines/new-technology-to-aid-veterans-mental-health/">Read more</a>
									</div>
								</div>
							</div>

						</div>

					</div>

				</div>

				<div id="contact" className="section md-padding">

					<div className="container">

						<div className="row">

							<div className="section-header text-center">
								<h2 className="title">Get in touch</h2>
							</div>
							<div className="col-sm-4">
								<div className="contact">
									<i className="fa fa-phone"></i>
									<h3>Phone</h3>
									<p>617-123-4444</p>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="contact">
									<i className="fa fa-envelope"></i>
									<h3>Email</h3>
									<p>email@support.com</p>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="contact">
									<i className="fa fa-map-marker"></i>
									<h3>Address</h3>
									<p>1 Brattle RD</p>
								</div>
							</div>

							<div className="col-md-8 col-md-offset-2">
								<form className="contact-form">
									<input type="text" className="input" placeholder="Name" />
									<input type="email" className="input" placeholder="Email" />
									<input type="text" className="input" placeholder="Subject" />
									<textarea className="input" placeholder="Message"></textarea>
									<button className="main-btn">Send message</button>
								</form>
							</div>

						</div>

					</div>

				</div>


				<footer id="footer" className="sm-padding bg-dark">

					<div className="container">

						<div className="row">

							<div className="col-md-12">

								<div className="footer-logo">
									<h1 className="white-text">PRYIA</h1>
								</div>



							</div>

						</div>

					</div>

				</footer>



				<div id="preloader">
					<div className="preloader">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		);
	}
}


export default App;
