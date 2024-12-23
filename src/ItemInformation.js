import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function ItemInformation() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#f9f9f9',
    };

    const mainStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '20px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap', // Allows wrapping for responsiveness
    };

    const imageStyle = {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const additionalImageStyle = {
        width: '100%',
        maxWidth: '140px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    };

    const infoStyle = {
        flex: '1 1 300px', // Flex-grow with a base width of 300px
        maxWidth: '500px',
        textAlign: 'start',
    };

    const responsiveStyle = {
        display: 'flex',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row', // Adjust direction based on width
    };

    return (
        <div style={containerStyle}>
            {/* Main Image and Info */}
            <div style={{ ...mainStyle, ...responsiveStyle }}>
                {/* Laptop main image */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px' }}>
                    <img
                        src="laptop.jpg"
                        alt="Laptop"
                        style={imageStyle}
                    />

                    {/* Additional images below main image */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <img
                            src="asus1.png"
                            alt="Laptop Angle 1"
                            style={additionalImageStyle}
                        />
                        <img
                            src="assus2.png"
                            alt="Laptop Angle 2"
                            style={additionalImageStyle}
                        />
                    </div>
                </div>

                {/* Laptop info */}
                <div style={infoStyle}>
                    <h2 style={{ fontSize: '26px', color: '#2b2b2b', textAlign: 'center', fontWeight: 'bold' }}>
                        ASUS ZENBOOK
                    </h2>
                    <h4 style={{ fontSize: '20px', color: '#d79128', textAlign: 'start', marginBottom: '10px' }}>
                        ABOUT PRODUCT
                    </h4>
                    <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px', textAlign: 'start' }}>
                        This is a high-performance laptop with the latest features designed for gaming, programming, and multimedia tasks.
                    </p>
                    <ul style={{ listStyleType: 'none', padding: '0', lineHeight: '1.6', textAlign: 'start' }}>
                        <li style={{ fontSize: '16px', color: '#444' }}>
                            <strong>Processor:</strong> Intel Core i7 11th Gen
                        </li>
                        <li style={{ fontSize: '16px', color: '#444' }}>
                            <strong>RAM:</strong> 16GB DDR4
                        </li>
                        <li style={{ fontSize: '16px', color: '#444' }}>
                            <strong>Storage:</strong> 512GB SSD
                        </li>
                        <li style={{ fontSize: '16px', color: '#444' }}>
                            <strong>Display:</strong> 15.6" Full HD
                        </li>
                        <li style={{ fontSize: '16px', color: '#444' }}>
                            <strong>Price:</strong> $1200
                        </li>
                        <li style={{ fontSize: '16px', color: '#444' }}>
                            <strong>Location:</strong> Casablanca
                        </li>
                    </ul>

                    <h4
                        style={{
                            fontSize: '20px',
                            color: '#d79128',
                            marginTop: '20px',
                            textAlign: 'start',
                            marginBottom: '15px',
                        }}
                    >
                        ABOUT SELLER
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <img
                            src="avatar.png"
                            alt="Seller Avatar"
                            style={{
                                width: '35px',
                                borderRadius: '50%',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <p style={{ fontSize: '18px', color: '#333', margin: '0' }}>
                            Kristen Wasten
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#333',
                            }}
                        >
                            <FaPhone style={{ color: 'white' }} />
                        </div>
                        <p style={{ margin: '0', fontSize: '18px', color: '#555' }}>(+33) 70055551</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#333',
                            }}
                        >
                            <FaEnvelope style={{ color: 'white' }} />
                        </div>
                        <p style={{ margin: '0', fontSize: '18px', color: '#555' }}>kristenwasten@example.com</p>
                    </div>
                    <button
                        style={{
                            padding: '12px 24px',
                            borderRadius: '8px',
                            backgroundColor: '#333',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#333')}
                    >
                        Contact the Seller
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemInformation;
