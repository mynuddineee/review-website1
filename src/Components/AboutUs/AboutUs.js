import React from 'react';
import { Col, Row } from 'react-bootstrap';
import'./AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Row className="my-4">
                <Col>
                    <img src="https://thumbs.dreamstime.com/b/education-icon-hand-innovative-online-e-learning-internet-technology-concept-webinar-knowledge-training-courses-skill-168577248.jpg" alt=""/>
                    
                </Col>
            
                <Col>
                    <h2>Our Story</h2>
                    <h4 className="text">Pathshala of Engineers was founded by Tanzim and Touhid in 2021 with a vision of providing life-transforming learning experiences to learners around the Country. Now a days, Pathshala of Engineers is a number one online learning platform in the country that offers anyone, anywhere, access to online courses and get certificate. 1 million learners, 50+ Fortune 100 companies, and more than 50 campuses, businesses, and governments come to Pathshala of Engineers to access world-class learning—anytime, anywhere.</h4>
                    
                </Col>
            </Row>
            
        </div>
    );
};

export default AboutUs;