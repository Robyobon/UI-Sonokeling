
import Layanan1 from '../../Asset/layanan1.png'
import Layanan2 from '../../Asset/lanan2.png'

function Layanan() {
  return (
  <section className='px-10 py-20 md:px-20 lg:px-32'id='layanan'>
    <div className='container mx-auto'>
    <h2 className="font-bold text-3xl text-black mb-10">Layanan Kami </h2>
    <div className='grid grid-cols-2 gap-5 '>
    <div>
      <img src={Layanan1} alt='foto layanan 1'/>
    </div>
    <div className=''>
      <h3 className='text-2xl font-medium '>BERDASAR BIDANG PEKERJAAN</h3>
      <ul className='list-decimal px-4 py-5'>
            <li>Pertanian dan Perkebunan</li>
            <li>Lingkungan Hidup dan Kehutanan</li>
            <li>Pertambangan dan Energi</li>
            <li>Perikanan dan Peternakan</li>
            <li>Industri Pengolahan</li>
        </ul>
        </div>
    </div>
    <div className='pt-12'>
          <img src={Layanan2} alt='foto layanan 2' />
        </div>
    </div>
   
  </section>
  );
}

export default Layanan;