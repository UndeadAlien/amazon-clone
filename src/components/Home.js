import React from 'react'
import '../styles/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-MzFkYTc5YjUt-w1500._CB418314283_.jpg"
                    alt="home-banner"
                />

                <div className="home__row">
                    <Product
                        id="123456789"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                        price={29.99}
                        image="https://www.brisbaneproductphotography.com.au/wp-content/uploads/2016/01/Black-Background-Product-Photography-11.jpg"
                        rating={5}
                    />
                    <Product
                        id="987654321"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                        price={99.99}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcyclingmagazine.ca%2Fwp-content%2Fuploads%2F2018%2F11%2FGettyImages-911727186.jpg&f=1&nofb=1"
                        rating={1}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="987654321"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                        price={1.99}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcyclingmagazine.ca%2Fwp-content%2Fuploads%2F2018%2F11%2FGettyImages-911727186.jpg&f=1&nofb=1"
                        rating={3}
                    />
                    <Product
                        id="987654321"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                        price={441.99}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcyclingmagazine.ca%2Fwp-content%2Fuploads%2F2018%2F11%2FGettyImages-911727186.jpg&f=1&nofb=1"
                        rating={5}
                    />
                    <Product
                        id="987654321"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                        price={432.99}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcyclingmagazine.ca%2Fwp-content%2Fuploads%2F2018%2F11%2FGettyImages-911727186.jpg&f=1&nofb=1"
                        rating={2}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="987654321"
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                        price={123.99}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcyclingmagazine.ca%2Fwp-content%2Fuploads%2F2018%2F11%2FGettyImages-911727186.jpg&f=1&nofb=1"
                        rating={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
