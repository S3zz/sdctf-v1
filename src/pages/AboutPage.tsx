import React from 'react';
import { Ghost, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 glitch-effect" data-text="ABOUT US">
          ABOUT US
        </h1>
        
        <div className="cyber-border p-8 bg-[#080808] mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cyberpunk city" 
                className="w-full h-auto cyber-border"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 border-b border-[#0ff] pb-2 inline-block">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                GHOST.LOG was founded in 2023 with a simple mission: to explore the philosophical and technological boundaries of humanity in an increasingly digital world.
              </p>
              <p className="text-gray-300">
                Inspired by the themes of "Ghost in the Shell," we seek to examine the intersection of consciousness, technology, and identity in the digital age. Through thoughtful analysis and cutting-edge insights, we aim to contribute to the ongoing conversation about what it means to be human in a post-human world.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Team Member 1 */}
          <div className="cyber-border p-4 bg-[#080808]">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team Member" 
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-1">Akira Kusanagi</h3>
            <p className="text-[#0ff] text-sm mb-3">Founder & Editor</p>
            <p className="text-gray-400 text-sm mb-4">
              Former cybersecurity analyst with a passion for exploring the philosophical implications of digital consciousness.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-[#0ff]">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ff]">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="cyber-border p-4 bg-[#080808]">
            <img 
              src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team Member" 
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-1">Rei Tanaka</h3>
            <p className="text-[#0ff] text-sm mb-3">Lead Writer</p>
            <p className="text-gray-400 text-sm mb-4">
              AI ethics researcher focusing on the boundaries between machine learning and human cognition.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-[#0ff]">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ff]">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="cyber-border p-4 bg-[#080808]">
            <img 
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team Member" 
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-1">Daisuke Aramaki</h3>
            <p className="text-[#0ff] text-sm mb-3">Technical Writer</p>
            <p className="text-gray-400 text-sm mb-4">
              Specialist in emerging technologies with a background in neurological interface development.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-[#0ff]">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0ff]">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="cyber-border p-8 bg-[#080808] mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Ghost className="h-5 w-5 text-[#0ff] mr-2" />
            Our Philosophy
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              At GHOST.LOG, we believe that as technology continues to advance at an exponential rate, the lines between human and machine, physical and digital, continue to blur. This blurring presents both unprecedented opportunities and profound philosophical questions.
            </p>
            <p>
              We're committed to examining these questions through a cyberpunk lens—one that is simultaneously critical of unregulated technological advancement while celebrating the potential for technology to enhance human experience and consciousness.
            </p>
            <p>
              Our approach is interdisciplinary, drawing from philosophy, computer science, neuroscience, sociology, and the arts to provide a comprehensive exploration of what it means to exist in an increasingly networked and digitized world.
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-border p-6 bg-[#080808]">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-start">
                  <Mail className="h-5 w-5 text-[#0ff] mr-3 mt-1" />
                  <span className="text-gray-300">contact@ghostlog.net</span>
                </p>
                <p className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-[#0ff] mr-3 mt-1" />
                  <span className="text-gray-300">For article submissions:<br />submissions@ghostlog.net</span>
                </p>
                <p className="mt-4 text-gray-400 text-sm">
                  We're always looking for new voices and perspectives. If you'd like to contribute to GHOST.LOG, please send us a pitch with your idea and a brief writing sample.
                </p>
              </div>
            </div>
            <div className="cyber-border p-6 bg-[#080808]">
              <h3 className="text-xl font-bold mb-4">Quick Message</h3>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-black border border-[#0ff]/30 text-white px-3 py-2 focus:outline-none focus:border-[#0ff]"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-black border border-[#0ff]/30 text-white px-3 py-2 focus:outline-none focus:border-[#0ff]"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-black border border-[#0ff]/30 text-white px-3 py-2 focus:outline-none focus:border-[#0ff]"
                  ></textarea>
                </div>
                <button type="button" className="cyber-button w-full">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="cyber-border p-4 bg-[#080808]">
              <summary className="font-bold cursor-pointer">What is GHOST.LOG about?</summary>
              <div className="mt-2 text-gray-300 pl-4">
                <p>
                  GHOST.LOG explores the intersection of humanity and technology through a cyberpunk lens, with a particular focus on artificial intelligence, consciousness, identity, and the philosophical implications of advanced technology.
                </p>
              </div>
            </details>
            
            <details className="cyber-border p-4 bg-[#080808]">
              <summary className="font-bold cursor-pointer">How often do you publish new content?</summary>
              <div className="mt-2 text-gray-300 pl-4">
                <p>
                  We publish new articles twice a week, typically on Tuesdays and Fridays. Special features and in-depth analyses may be published on an irregular schedule.
                </p>
              </div>
            </details>
            
            <details className="cyber-border p-4 bg-[#080808]">
              <summary className="font-bold cursor-pointer">Can I contribute to GHOST.LOG?</summary>
              <div className="mt-2 text-gray-300 pl-4">
                <p>
                  Yes! We welcome contributions from writers, philosophers, technologists, and artists who share our interest in exploring the boundaries between humanity and technology. Please send your pitch to submissions@ghostlog.net.
                </p>
              </div>
            </details>
            
            <details className="cyber-border p-4 bg-[#080808]">
              <summary className="font-bold cursor-pointer">Is GHOST.LOG related to the Ghost in the Shell franchise?</summary>
              <div className="mt-2 text-gray-300 pl-4">
                <p>
                  While we draw inspiration from the themes and philosophical questions posed by "Ghost in the Shell," GHOST.LOG is not officially affiliated with the franchise. We explore similar themes through our own lens and analytical framework.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;