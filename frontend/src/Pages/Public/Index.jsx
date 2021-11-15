import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Carousel, Container } from 'react-bootstrap'
import Home from './Home';



const Index = () => {
    const {isAuthenticated} = useAuth0();
    return (
        <div>{
            !isAuthenticated?

            <Container>
                <Carousel classNameName="container-carousel">
                <Carousel.Item >
                    <img
                    classNameName="d-block w-100"
                    src={process.env.PUBLIC_URL + '/img/camiseta2.PNG'}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    classNameName="d-block w-100"
                    src={process.env.PUBLIC_URL + '/img/Green_Front_Sweater_Mockup.jpg'}
                    alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    classNameName="d-block w-100"
                    src={process.env.PUBLIC_URL + '/img/rm363-b08-google-mockup.jpg'}
                    alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                    classNameName="d-block w-100"
                    src={process.env.PUBLIC_URL + '/img/Sweater_Mockup_Front_and_Back.jpg'}
                    alt="Third slide"
                    />

                </Carousel.Item>
                </Carousel>
            </Container>
            :<Home/>

                    
                
                    
            }
            
        </div>
    )
}

export default Index;

