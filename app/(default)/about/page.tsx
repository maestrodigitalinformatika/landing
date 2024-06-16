export const metadata = {
  title: 'About - Maestro Digital Informatika',
  description: 'About - Maestro Digital Informatika',
}

export default function Home() {
  const employees = [
    { photo: '/path/to/photo1.jpg', name: 'John Doe', role: 'CEO' },
    { photo: '/path/to/photo2.jpg', name: 'Jane Smith', role: 'CTO' },
    // Add more employees as needed
  ];

  const missions = [
    'Innovation and Excellence: To continually push the boundaries of technology, creating cutting-edge software solutions that exceed client expectations.',
    'Client-Centric Approach: To understand and meet the unique needs of each client, providing tailored solutions that drive their business growth and efficiency.',
    'Quality and Reliability: To deliver high-quality, reliable, and secure software products that empower businesses to thrive in a digital world.',
    'Talent Development: To foster a culture of continuous learning and growth, empowering our team to excel and innovate.',
    'Ethical Practices: To conduct our business with integrity, transparency, and respect, building long-term relationships based on trust.',
    'Global Impact: To leverage our expertise to make a positive impact on businesses and communities worldwide, driving progress through technology.',
  ]

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-16">
          <p className="text-xl">Leading the Way with Cutting-Edge Technology Standards</p>
          <h1 className="text-5xl font-bold mb-4">IT Consultant Offering Top Digital Solutions to Meet Clients' Needs and Demands</h1>
        </div>
      </div>

      {/* About */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16">
        <div className="flex flex-col items-start justify-center mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Hy, We Are Mavia Digital, your</h2>
          <p className="mb-6">Mavia Digital was founded in 2011. Initially, we focused on developing Windows-based applications. One of our early achievements was creating an app that was preloaded on the first Nokia Lumia family, a moment we are incredibly proud of. As we strived to improve over the years, we adapted to meet the evolving needs of the world. Embracing these challenges, we have now become proficient across various platforms, offering a full range of solutions for any industry. Additionally, we are developing our own consumer and corporate mobility-related products.</p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Send Inquiry</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">Download Company Profile</button>
          </div>
        </div>
        <div className="relative md:w-1/2">
          <img src="/path/to/company-logo.jpg" alt="Company Logo" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 bg-white px-4 py-2 rounded shadow-lg">Click Me</div>
        </div>
      </div>

      {/* Vision */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/path/to/example-image.jpg" alt="Example" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Vision</h2>
          <p className="text-xl">To be the leading software house renowned for innovation, quality, and delivering transformative digital solutions that drive the success of businesses globally.</p>
        </div>
      </div>

      {/* Missions */}
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="space-y-4">
          {missions.map(mission => (
            <div className="bg-white p-6 shadow rounded-lg">{mission}</div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="space-y-4">
          {employees.map((employee, index) => (
            <div key={index} className="flex items-center bg-white p-6 shadow rounded-lg">
              <img src={employee.photo} alt={employee.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{employee.name}</h3>
                <p>{employee.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/example-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-16">
          <h2 className="text-3xl font-bold text-white">
            Mavia Digital terdiri dari orang-orang milenial yang berbakat dan
            bersemangat dengan kemampuan luar biasa, pada Web, Mobile,
            UI/UX Design, Analysis, Quality Assurance, dan Project
            Management.
          </h2>
        </div>
      </div>

      {/* Our Shared Values */}
      <div className="max-w-6xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Shared Values</h2>
        <p>
          Since its inception, Mavia Digital has steadfastly upheld principles and values that are fundamental to its business operations. These values are the cornerstone of our identity; without them, Mavia Digital would be just another soulless company.
        </p>
      </div>

      {/* Motto */}
      <div className="max-w-6xl mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold">"
          Over 160 technology-first businesses secured measurably greater scalability, performance, and popularity of their products with us. See how much custom software development services changed for them."
        </h2>
      </div>
    </>
  )
}
