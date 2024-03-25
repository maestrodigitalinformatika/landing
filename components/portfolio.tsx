import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="mx-auto pb-12 md:pb-20">
            <h2 className="h3 mb-4">Jasa Pembuatan Website & Aplikasi <br />Mobile Menyediakan Solusi Digital untuk bisnis Anda.</h2>
            <p className="text-xl text-gray-600">Lihat Paket <b>Jasa Pembuatan Website &#x27B2; {/*<FontAwesomeIcon icon={faCircleRight} className='text-sm' />*/}</b> </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            <div className="relative bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img src="/images/portfolio/portfolio-1.png" alt="" className="rounded-t-lg" />
              {/* Overlay */}
              <div className="absolute top-0 left-0 bg-white py-2 px-8 rounded-tl-lg rounded-br-lg shadow-lg">
                <p><b>Ambroise</b></p>
              </div>
              <div className="p-6">
                <div className="rounded-xl bg-black py-2 px-4 inline-flex items-center mb-2">
                  <p className="text-white text-xs">Pembuatan Aplikasi Android, iOS, dan Website</p>
                </div>
                <p className="mb-2">Website dan Aplikasi untuk Booking Jasa Potong Rambut.</p>
                <div className="btn-group mt-4">
                  <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 inline-block mr-4 rounded">Detail</a>
                  <a href="/portfolio" className="bg-transparent border border-solid border-blue-500 hover:bg-blue-400 text-blue-500 hover:text-white px-4 py-2 inline-block mr-4 rounded">Semua Portfolio</a>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img src="/images/portfolio/portfolio-2.png" alt="" className="rounded-t-lg" />
              {/* Overlay */}
              <div className="absolute top-0 left-0 bg-white py-2 px-8 rounded-tl-lg rounded-br-lg shadow-lg">
                <p><b>Radja Kompor</b></p>
              </div>
              <div className="p-6">
                <div className="rounded-xl bg-black py-2 px-4 inline-flex items-center mb-2">
                  <p className="text-white text-xs">Pembuatan Aplikasi Android, iOS, dan Website</p>
                </div>
                <p className="mb-2">Website Company Profile Sebuah Usaha reparasi dan Jual Beli Kompor Modern.</p>
                <div className="btn-group mt-4">
                  <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 inline-block mr-4 rounded">Detail</a>
                  <a href="/portfolio" className="bg-transparent border border-solid border-blue-500 hover:bg-blue-400 text-blue-500 hover:text-white px-4 py-2 inline-block mr-4 rounded">Semua Portfolio</a>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img src="/images/portfolio/portfolio-3.png" alt="" className="rounded-t-lg" />
              {/* Overlay */}
              <div className="absolute top-0 left-0 bg-white py-2 px-8 rounded-tl-lg rounded-br-lg shadow-lg">
                <p><b>You Agency</b></p>
              </div>
              <div className="p-6">
                <div className="rounded-xl bg-black py-2 px-4 inline-flex items-center mb-2">
                  <p className="text-white text-xs">Pembuatan Aplikasi Android, iOS, dan Website</p>
                </div>
                <p className="mb-2">Aplikasi untuk Side Book Pegangan Marketing Agen Asuransi dari Prudential.</p>
                <div className="btn-group mt-4">
                  <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 inline-block mr-4 rounded">Detail</a>
                  <a href="/portfolio" className="bg-transparent border border-solid border-blue-500 hover:bg-blue-400 text-blue-500 hover:text-white px-4 py-2 inline-block mr-4 rounded">Semua Portfolio</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
