import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  FaHashtag, FaBrain, FaNetworkWired,
  FaFileAlt, FaSortAmountUp
} from 'react-icons/fa';
import '../styles/Home.css';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home: React.FC = () => {
  return (
    <motion.div
      className="homepage"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div className="hero-text" variants={fadeIn}>
            <h1 className="hero-heading">Catch AI-Generated Content with Precision</h1>
            <p className="hero-subtext">
              As AI language tools evolve, distinguishing machine written content from human writing is vital for education, publishing, and authenticity. Our algorithm, rooted in classic data structures, delivers accurate, transparent detection - fast and offline.
            </p>
            <div className="hero-buttons">
              <Link to="/trial" className="btn primary">Try It Now</Link>
              <Link to="/developer" className="btn secondary">Meet The Team</Link>
            </div>
          </motion.div>
          <motion.div className="hero-image" variants={fadeIn}>
            <img src="https://images.pexels.com/photos/8566521/pexels-photo-8566521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="AI detection illustration" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <motion.div className="section-title" variants={fadeIn}>
            <h2>Algorithm Powered by Classic DSA</h2>
            <p>Our hybrid detection system leverages proven algorithms for pattern recognition, plagiarism check, and semantic similarity without black-box AI.</p>
          </motion.div>

          <motion.div className="features-grid" variants={staggerContainer}>
            {[{
              icon: <FaHashtag />, title: "Hashing (Pattern Analysis)",
              desc: "Analyze n-gram frequencies and compare patterns against AI-trained datasets."
            }, {
              icon: <FaBrain />, title: "Trie (Phrase Detection)",
              desc: "Identify repetitive AI-like phrases through prefix tree structure."
            }, {
              icon: <FaNetworkWired />, title: "Graph (Semantic Flow)",
              desc: "Build word-relationship graphs and trace semantic connections using BFS/DFS."
            }, {
              icon: <FaFileAlt />, title: "Dynamic Programming (Edit Distance)",
              desc: "Compare text similarity to AI corpuses using Levenshtein distance."
            }, {
              icon: <FaSortAmountUp />, title: "Heap (Word Frequency)",
              desc: "Surface commonly overused words with Max Heap for pattern match."
            }].map((item, i) => (
              <motion.div key={i} className="feature-card glass" variants={fadeIn}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research */}
      <section className="research-section">
        <div className="container research-layout">
          <motion.div className="research-text" variants={fadeIn}>
            <h2>What Makes Our Method Unique?</h2>
            <p>
              Instead of relying on opaque machine learning models, we use interpretable, logic-based approaches using:
            </p>
            <ul>
              <li>Hashing for linguistic fingerprinting</li>
              <li> Tries for AI phrase spotting</li>
              <li> Graphs to trace semantic flow</li>
              <li> Edit Distance for plagiarism check</li>
              <li> Heaps for pattern-heavy word detection</li>
            </ul>
            <p>
              This makes our detection fast, explainable, and usable offline—ideal for schools, publishers, and content platforms.
            </p>
            <a href="https://drive.google.com/file/d/1ZVFwXYeZXWUa2ko9aVD20IlH_lUKila_/view" target="_blank" rel="noopener noreferrer" className="btn accent">Read Our Paper</a>
          </motion.div>
          <motion.div className="research-image" variants={fadeIn}>
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="research illustration" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-box" variants={fadeIn}>
            <h2>Ready to Try the Tool?</h2>
            <p>Paste your text and let our algorithm reveal its origin.</p>
            <Link to="/trial" className="btn primary">Start Detection</Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;