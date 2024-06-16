'use client'

import { FaLaptop, FaPeopleArrows, FaLightbulb, FaCode } from 'react-icons/fa';

export default function Features() {
  const cards = [
    {
      icon: <FaCode />,
      title: 'Custom Software Development',
      description: 'We offer fully bespoke software solutions for our clients, and customise your experience to ensure your individual needs are met.',
      link: '/address'
    },
    {
      icon: <FaLaptop />,
      title: 'Web Application Development',
      description: 'Progressive Web Applications are the future of app and website development. Studies show that you can as much as triple your engagement using Progressive Web Applications.',
      link: 'tel:+6282231532679'
    },
    {
      icon: <FaPeopleArrows />,
      title: 'Dedicated Agile Development Team',
      description: 'Our Agile Software Consulting and Development team have worked together to bring innovative, agile thinking to in-house teams in more than 700 companies around the world.',
      link: 'mailto:byayoan@it.student.pens.ac.id'
    },
    {
      icon: <FaLightbulb />,
      title: 'Software Product Development',
      description: 'Develop and adapt your app faster with an extended near-shore software product development team that supports your in-house developers.',
      link: '/hours'
    }
  ];

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">We Know the Solution of Your Business Problems</h1>
            <p className="text-xl text-gray-600">Simplicity, Reliability, and Customer-centricity are the core values that drive us to deliver exceptional technology experiences.</p>
          </div>

            {/* Content */}
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cards.map((card, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-lg p-6 flex">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="mb-4">{card.description}</p>
                    <a href={card.link} className="bg-transparent border border-solid border-blue-500 hover:bg-blue-400 text-blue-500 hover:text-white px-4 py-2 block text-center rounded">Learn More</a>
                  </div>
                </div>
              ))}
            </div>

        </div>
      </div>
    </section>
  )
}