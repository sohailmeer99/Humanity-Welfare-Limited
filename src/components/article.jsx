import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArticleData from '../../article-data';
import { style } from 'framer-motion/client';

function Article(props) {
    const [showFull, setShowFull] = useState(false);
    const article = ArticleData[props.articleNumber];

    const handleShowFull = () => setShowFull(true);
    const handleShowLess = () => setShowFull(false);

    return (
        <div
            style={{
                width: '100%',
                height: '70vh',
                display: 'flex',
                justifyContent: 'center',
                marginBottom:'20vh',
            }}
        >
            <div
                style={{
                    width: '80%',
                    height: '70vh',
                    display: 'flex',
                    padding:'10px',
                    boxShadow:'0px 10px 52px -12px #4FFFB0',
                    justifyContent: 'space-between',
                    borderRadius:'40px'
                }}
            >
                <div style={{ width: '30vw', height: '100%' }}>
                    <img
                        style={{
                            width: '30vw',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '20px',
                        }}
                        src= {props.img}
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
                        transition: 'all 0.4s ease',
                    }}
                >
                    <div style={{ height: '20%', margin: 0 }}>
                        <h1
                            style={{
                                paddingBottom: '30px',
                                fontSize: '3rem',
                                color: '#000',
                                margin: 0,
                                fontWeight:'900'
                            }}
                        >
                            {article.heading}
                        </h1>
                    </div>
                    <div
                        style={{
                            height: showFull ? '50%' : '40%',
                            overflowY: showFull ? 'scroll' : 'hidden',
                            paddingRight: '10px',
                            marginTop:'50px'
                        }}
                    >
                       <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{
        fontSize: '1.4rem',
        color: '#000',
        width: showFull ? '100%' : '100%', // ✅ Smoothly transition width
        transition: 'width 0.5s ease',
        overflowX: 'hidden', // ✅ No horizontal scrollbar flicker
    }}
>
    <AnimatePresence mode="wait">
        {showFull ? (
            <motion.div
                key="fullText"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                style={{ overflowX: 'hidden' }} // ✅ Extra safeguard against scrollbars
            >
                {article.fullPara}
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
            </motion.div>
        ) : (
            <motion.div
                key="shortText"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                style={{ overflowX: 'hidden' }} // ✅ Extra safeguard
            >
                {article.shortPara}
                <span
                    onClick={handleShowFull}
                    style={{
                        color: '#000',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        display: 'block',
                        marginTop: '10px',
                    }}
                >
                    Read More
                </span>
            </motion.div>
        )}
    </AnimatePresence>
</motion.div>

                    </div>
                    <div
                        style={{
                            height: '20%',
                            display: 'flex',
                            alignItems: 'end',
                            paddingBottom:'10px'
                        }}
                    >
                        <button className="donate-btn">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
