import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroImage from '../../img/hero-img.svg';

const Landing = ({ isAuthenticated }) => { 
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Fragment>
			<section className="hero">
				<div className="landing">
					<div className="landing-content">
						<img src={Logo} alt="Vibe logo" className="Vibe logo" />
						<h1 className="x-large">Vibe</h1>
						<p>
							Connect with people from all walks of life. Share your story, 
							learn from others, and celebrate diversity in our vibrant community.
						</p>
						<Link className="btn btn-primary" to="/login">
							Join the Vibe
						</Link>
					</div>
					<div className="landing-img">
						<img src={HeroImage} alt="People connecting" />
					</div>
				</div>
			</section>

			<section className="block container">
				<h1>How to Get Started</h1>

				<p>
					<strong>1. </strong>
					Personalize your profile by clicking on your profile picture and selecting the gear icon.
				</p>
				<p>
					<strong>2. </strong>
					Discover new friends and share posts with a global community.
				</p>
				<p>
					<strong>3. </strong>
					Like and comment on posts to engage with others.
				</p>
				<p>
					<strong>4. </strong>
					Start conversations by asking questions or joining existing discussions.
				</p>
			</section>

			<section className="container">
				<h1 className="large">What is Vibe?</h1>

				<p>
					Vibe is a social platform designed to bridge gaps and bring together 
					people from all backgrounds. Whether you're here to connect, learn, 
					or share, you're part of a welcoming, diverse community.
				</p>
			</section>
		</Fragment>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
