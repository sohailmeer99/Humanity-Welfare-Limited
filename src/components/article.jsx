import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArticleData from '../../article-data';

function Article(props) {
    const [showFull, setShowFull] = useState(false);
    const article = ArticleData[props.articleNumber];
    const textContainerRef = useRef(null);

    const handleShowFull = () => setShowFull(true);

    const handleShowLess = () => {
        setShowFull(false);
        if (textContainerRef.current) {
            textContainerRef.current.scrollTop = 0;
        }
    };

    return (
        <div className="article-container">
            <div className="article-card">
                {/* Image Section (Fixed Size) */}
                <div className="article-image-container">
                    <img className="article-image" src={props.img} alt={article.heading} />
                </div>

                {/* Content Section */}
                <div className="article-content">
                    <div className="article-heading-container">
                        <h1 className="article-heading">{article.heading}</h1>
                    </div>

                    {/* Article Text */}
                    <div 
                        className={`article-text-container ${showFull ? 'expanded' : ''}`} 
                        ref={textContainerRef} 
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="article-text"
                        >
                            <AnimatePresence mode="wait">
                                {showFull ? (
                                    <motion.div
                                        key="fullText"
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.4 }}
                                        style={{ color: '#4FFFB0' }}
                                    >
                                        {article.fullPara}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="shortText"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.4 }}
                                        style={{ color: '#4FFFB0' }}
                                    >
                                        {article.shortPara}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Read More / Show Less Button */}
                    <div className="read-more-container">
                        <span onClick={showFull ? handleShowLess : handleShowFull} className="read-more-link">
                            {showFull ? "Show Less" : "Read More"}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="article-action-container">
                        <button className="donate-btn-article">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;