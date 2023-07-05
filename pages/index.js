/*********************************************************************************
*  WEB422 – Assignment 4
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _____Emiliya Aghayeva_________________ Student ID: _____148398217_____________ Date: ___________________01/07/2023
*
*  Netlify Link: https://dreamy-choux-a688d8.netlify.app 
********************************************************************************/ 

import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <div className='homepage'>
      <Container>
          <Row>
              <Col className='text-center'>
                  <Image className='neon-glow' width="80%" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" rounded /><br /><br /><br />
              </Col>
          </Row>
          <Row>
              <Col>
                  <p className='intro-para'>The Metropolitan Museum of Art in New York City, colloquially the Met, is the largest art museum in the Americas. 
                  In 2022 it welcomed 3,208,832 visitors, ranking it eighth in the list of most-visited art museums in the world, and the second-most visited art museum in the United States. 
                  Its permanent collection contains over two million works, divided among 17 curatorial departments. The Metropolitan Museum of Art was founded in 1870 with its mission to bring art and art education to the American people.
                  . The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park on Manhattans Upper East Side, is by area one of the worlds largest art museums. The first portion of the approximately 2-million-square-foot (190,000 m2) building was built in 1880. A much smaller second location, 
                  The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from medieval Europe.
                  
                  <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" className='home-wik-link' target="_blank" rel="noreferrer">… read more</a></p>
              </Col>
          </Row>
      </Container>
    </div>
  )
}