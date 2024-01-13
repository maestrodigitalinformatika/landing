import { MdAndroid, MdWeb, MdStorage, MdCloud, MdBrush, MdWidgets } from 'react-icons/md';



export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore the solutions</h2>
            <p className="text-xl text-gray-600">Our versatile product suite empowers businesses with comprehensive solutions that streamline operations, boost productivity, and accelerate growth in the digital age.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="icon-container w-16 h-16 p-1 -mt-1 mb-2">
                <MdAndroid className="icon" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Android App</h4>
              <p className="text-gray-600 text-center">Innovative Android apps for optimal user experiences.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="icon-container w-16 h-16 p-1 -mt-1 mb-2">
                <MdWidgets className="icon" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Multi-Platform Mobile App</h4>
              <p className="text-gray-600 text-center">Cross-platform apps for enhanced user reach and engagement.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="icon-container w-16 h-16 p-1 -mt-1 mb-2">
                <MdWeb className="icon" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Web Development</h4>
              <p className="text-gray-600 text-center">Customized websites with responsive design and seamless navigation.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="icon-container w-16 h-16 p-1 -mt-1 mb-2">
                <MdStorage className="icon" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Back-End API</h4>
              <p className="text-gray-600 text-center">Robust APIs enabling seamless data integration and communication.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="icon-container w-16 h-16 p-1 -mt-1 mb-2">
                <MdCloud className="icon" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">DevOps CI/CD</h4>
              <p className="text-gray-600 text-center">Automated software delivery for efficient development cycles.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="icon-container w-16 h-16 p-1 -mt-1 mb-2">
                <MdBrush className="icon" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">UI/UX Design</h4>
              <p className="text-gray-600 text-center">Engaging interfaces and intuitive experiences for user satisfaction.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}