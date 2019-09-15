import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SwipeableDrawer,Drawer } from '@material-ui/core';
import pageLinks from '../resources/pageLinks'
const mapStateToProps = state => {
    return {
		state:state.iseWebsite
    }
}

const mapDispatchToProps =dispatch=>{
	return{
		ToggleNavBar: () => dispatch({ type: 'TOGGLE_Navbar' }),
	}
}
class LeftDrawer extends Component {
	constructor(props) {
		super(props);
		/*
		this.state = {
			//navBar:true,
		};
		*/
	  }
    render(){
        console.log(pageLinks)
        return(
            
            <SwipeableDrawer
                open={this.props.state.navBar}
                onClose={this.props.ToggleNavBar}
                transitionDuration={100}
                onOpen={this.props.ToggleNavBar}
            >
                <div id="sidebar">
                {/*<div>*/}
                    <div class="inner">
                        <section id="search" class="alt">
                            <form method="post" action="#">
                                <input type="text" name="query" id="query" placeholder="Search" />
                            </form>
                        </section>

                        <nav id="menu">
                            <header class="major">
                                <h2>Menu</h2>
                            </header>
                            <ul>
                                <li><a href={pageLinks.internal.domain}>Home</a></li>
                                <li><a href={pageLinks.internal.about}>About Us</a></li>
                                <li><a href={pageLinks.internal.mc18}>18th Management Committee</a></li>
                                <li>
                                    <span class="opener">Events</span>
                                    <ul>
                                        <li><a href={pageLinks.events.foc}>ISE Freshman Orientation Camp</a></li>
                                        <li><a href={pageLinks.events.day}>ISE Day</a></li>
                                        <li><a href={pageLinks.events.cycling}>ISE Night Cycling</a></li>
                                        <li><a href={pageLinks.events.welfare}>Welfare Giveaways</a></li>
                                        <li><a href={pageLinks.events.cip}>Community Involvement Projects</a></li>
                                        <li><a href={pageLinks.events.careertalk}>ISE Industry and Career Talk</a></li>
                                        <li><a href={pageLinks.events.bacc}>NUS ISE Business Analytics Case Competition</a></li>
                                    </ul>
                                </li>
                                <li><a href={pageLinks.internal.shop}>Merchandise</a></li>
                                <li><a href={pageLinks.internal.sponsors}>Sponsorship</a></li>
                                <li><a href={pageLinks.internal.contact}>Contact Us</a></li>

                            </ul>
                        </nav>

                        <section>
                            <header class="major">
                                <h2>Upcoming Events</h2>
                            </header>
                            <div class="mini-posts">
                                <article>
                                    <a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
                                    <p>ISE Day is here soon! Click <a href={pageLinks.events.day}>here</a> to find out more.</p>
                                </article>
                                <article>
                                    <a href="#" class="image"><img src="images/ISENC2019.png" alt="" /></a>
                                    <p>Ready for a night of fun and laughter? Learn more about Night Cycling <a href={pageLinks.events.cycling}>here</a>.</p>
                                </article>
                                <article>
                                    <a href="#" class="image"><img src="images/pic09.jpg" alt="" /></a>
                                    <p>ISE Shirt Sales have started! Click <a href={pageLinks.internal.shop}>here</a> to shop now</p>
                                </article>
                            </div>
                            <ul class="actions">
                                <li><a href="#" class="button">More</a></li>
                            </ul>
                        </section>

                        <section>
                            <header class="major">
                                <h2>Get in touch</h2>
                            </header>
                            <p>Queries? Feedback? Feel free to reach out to us here! Or you can DM us on Instagram ;)</p>
                            <ul class="contact">
                                <li class="icon solid fa-envelope"><a href={pageLinks.external.email}>club.ise.nus@gmail.com</a></li>
                                <li class="icon solid fa-home">1 Engineering Drive 2, Blk E1A #06-25 <br />
                                    Singapore 117576</li>
                            </ul>
                        </section>

                        <footer id="footer">
                            <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                        </footer>

                    </div>
                </div>
            </SwipeableDrawer>
        )
    }
}

export default withRouter(
    compose(
      connect(
		  mapStateToProps,
		  mapDispatchToProps)
    )(LeftDrawer)
  )