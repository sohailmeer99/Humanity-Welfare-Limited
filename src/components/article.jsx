import { useState } from 'react';

function Article() {
    const paragraph = `A home is the foundation of security and stability in every individual’s life. Let us introduce you to the most desperate platform, Humanity Welfare Limited, providing housing support for those in need, especially in Pakistan and other underdeveloped communities, ensuring that everyone has access to safe and secure living spaces.
    Let’s dive deeply into what are the causes & effects of not having proper access to shelter and housing facilities. Some of the most underdeveloped countries suffer from housing crises and fail to provide proper residential solutions due to the lack of urban planning, land resources, and government support (e.g., corruption, non-serious activities). The other reason is that people in those regions are facing financial instability and don’t have the means to build or afford safe housing.
    Most of the platforms providing housing projects demand high costs. They require expensive materials — needing specialized construction knowledge — and should have pre-existing housing infrastructure to implement these projects.
    Approximately 50% of people don’t have access to affordable housing and are forced to live in uninhabitable conditions, as their time & money are considered a wastage.
    Humanity Welfare Limited is built to provide free housing solutions — offering residential care, society development, and shelter for those in need. This platform is a non-profit organization working to ensure that no one is left without a place to call home.
    A home is necessary for personal security and building a stable future. Humanity Welfare Limited is aimed to broaden the vision of society for better living conditions.`;

    const [showFull, setShowFull] = useState(false);
    const wordLimit = 150;
    const words = paragraph.trim().split(' ');
    const shortText = words.slice(0, wordLimit).join(' ') + '... ';

    const handleShowFull = () => setShowFull(true);
    const handleShowLess = () => setShowFull(false);

    return (
        <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', height: '70vh', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '30vw', height: '100%' }}>
                    <img
                        style={{ width: '30vw', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                        src="/Humanity-Welfare-Limited/assets/4.jpg"
                        alt="Housing Support"
                    />
                </div>
                <div
                    style={{
                        width: '60%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ height: '20%', margin: 0 }}>
                        <h1
                            style={{
                                paddingBottom: '30px',
                                fontSize: '3rem',
                                color: '#000',
                                margin: 0,
                            }}
                        >
                            A Home Is More Than Just Shelter
                        </h1>
                    </div>
                    <div
                        style={{
                            height: '60%',
                            overflowY: showFull ? 'scroll' : 'hidden',
                            paddingRight: '10px',
                        }}
                    >
                        <p style={{ fontSize: '1.4rem',color:'#000'}}>
                            {showFull ? (
                                <>
                                    {paragraph}
                                    <span
                                        onClick={handleShowLess}
                                        style={{
                                            color: '#000',
                                            cursor: 'pointer',
                                            display: 'block',
                                            marginTop: '10px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Show Less
                                    </span>
                                </>
                            ) : (
                                <>
                                    {shortText}
                                    <span
                                        onClick={handleShowFull}
                                        style={{ color: '#000', cursor: 'pointer', fontWeight: 'bold' }}
                                    >
                                        Read More
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                    <div style={{ height: '20%',display:'flex', alignItems:'center' }}>
                        <button className="donate-btn" >
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
