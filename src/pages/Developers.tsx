import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Developers.css';

interface Developer {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}

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
    transition: {
      staggerChildren: 0.2
    }
  }
};

const developers: Developer[] = [
  {
    name: "Atharv Gangwar",
    role: "Team Lead (Frontend)",
    bio: "The development of this algorithm, which uses simple data structures to detect human versus AI-generated content, was initiated by Atharv Gangwar. He led the team through the algorithm's development and research phases, and further contributed by designing its web interface.",
    image: "https://atharvgangwar.netlify.app/images/pic2.jpeg",
    social: {
      github: "https://github.com/AtharvGangwar48",
      linkedin: "https://www.linkedin.com/in/atharvgangwar/",
      email: "mailto:atharvgangwar8@gmail.com"
    }
  },
  {
    name: "Nivedan Belwal",
    role: "Backend (Data Structures)",
    bio: "Nivedan Belwal played a key role in the project's success by developing the crucial Data Structure component of the code, ensuring the algorithm's efficient operation. His contributions included researching and implementing Hashing, Tries, Graphs, Edit Distance, and Heaps.",
    image: "/Nevidan.jpg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:nivedanbelwal627@gmail.com"
    }
  },
  {
    name: "Dhruv Negi",
    role: "Backend (Data Collection)",
    bio: "Dhuruv Negi significantly contributed to the algorithm's accuracy by meticulously gathering essential data, including AI-like words, AI sample tokens, and common AI-generated phrases. This information proved critical for the algorithm's precise and effective operation.",
    image: "/Dhruv.jpg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:negi67291@gmail.com"
    }
  },
  {
    name: "Aditya Awasthi",
    role: "Backend (Scoring & Classifying System)",
    bio: "Aditya Awasthi developed a vital component of the algorithm: a sophisticated Scoring & Classifying system. This system determines the accuracy of AI-generated content by effectively distinguishing between AI and human-written text.",
    image: "/Aditya.png",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:adityaawasthi069@gmail.com"
    }
  }
];

const Developers: React.FC = () => {
  return (
    <motion.div 
      className="page-transition"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <section className="developers">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeIn}
          >
            <h1>Meet Our Team</h1>
            <p>The individuals behind the AI Content Checker project</p>
          </motion.div>

          <motion.div 
            className="team-grid"
            variants={staggerContainer}
          >
            {developers.map((developer, index) => (
              <motion.div 
                key={index} 
                className="team-member"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="member-image">
                  <img src={developer.image} alt={developer.name} />
                </div>
                <div className="member-content">
                  <h2>{developer.name}</h2>
                  <h3>{developer.role}</h3>
                  <p>{developer.bio}</p>
                  <div className="member-social">
                    <a href={developer.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a href={developer.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      < FiLinkedin />
                    </a>
                    <a href={developer.social.email} aria-label="Email">
                      <FiMail />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="team-approach"
            variants={fadeIn}
          >
            <h2>Our Approach</h2>
            <p>
              Our team brought together individuals with interest in Data Structures and Algorithms, as well as the Design and Analysis of algorithms. As a 
              4th-semester college project focused on Data Structures through project-based learning, we developed this project to effectively showcase our 
              skills and understanding in this subject.
            </p>
            <p>
              This project serves as a practical demonstration of our collective abilities in applying data structure principles to solve a real-world problem.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Developers;