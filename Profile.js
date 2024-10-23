import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
	useEffect(() => {
		getProfileById(match.params.id);
	}, [getProfileById, match.params.id]);

	return (
		<Fragment>
			{profile === null ? (
				<Spinner />
			) : (
				<Fragment>
					<Link to="/profiles" className="btn btn-light">
						<i className="fas fa-chevron-left"></i> Back To Profiles
					</Link>
					{auth.isAuthenticated &&
						auth.loading === false &&
						auth.user._id === profile.user._id && (
							<Link to="/edit-profile" className="btn btn-dark">
								Edit Profile
							</Link>
						)}
					<div className="profile-grid my-1">
						{/* Displaying basic profile information */}
						<ProfileTop profile={profile} />
						<ProfileAbout profile={profile} />

						{/* Display additional fields for Vibe */}
						<div className="profile-details bg-white p-2">
							<h2 className="text-primary">Details</h2>
							<ul>
								<li><strong>Name:</strong> {profile.name}</li>
								<li><strong>Sex:</strong> {profile.sex}</li>
								<li><strong>Age:</strong> {profile.age}</li>
								<li><strong>Location:</strong> {profile.location}</li>
								<li><strong>Hobbies:</strong> {profile.hobbies && profile.hobbies.join(', ')}</li>
							</ul>
						</div>

						{/* Remove or comment out sections not needed for Vibe */}
						{/* 
						<div className="profile-exp bg-white p-2">
							<h2 className="text-primary">Experience</h2>
							{profile.experience.length > 0 ? (
								<Fragment>
									{profile.experience.map((experience) => (
										<ProfileExperience
											key={experience._id}
											experience={experience}
										/>
									))}
								</Fragment>
							) : (
								<h4>No experience credentials</h4>
							)}
						</div>

						<div className="profile-edu bg-white p-2">
							<h2 className="text-primary">Education</h2>
							{profile.education.length > 0 ? (
								<Fragment>
									{profile.education.map((education) => (
										<ProfileEducation
											key={education._id}
											education={education}
										/>
									))}
								</Fragment>
							) : (
								<h4>No education credentials</h4>
							)}
						</div>

						{profile.githubusername && (
							<ProfileGithub username={profile.githubusername} />
						)}
						*/}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

Profile.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);