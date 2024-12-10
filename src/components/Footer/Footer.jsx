import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>upadhyaydhrumin224@gmail.com,
            </p>
            <p>Phone:
             6355917400,
            </p>
            <p>Location: Vadodara, India.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/dhrumin-upadhyay-98b021287/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Dhrumin007-creator
"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} Dhrumin Upadhyay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;