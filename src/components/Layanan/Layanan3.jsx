
import Divisi from '../../Asset/divisi1.png'
import Gis from '../../Asset/gis1.png'
import Surveypemetaan from '../../Asset/surveipemetaan1.png'

function Layanan3() {
  return (
  <section className='px-10 py-20 md:px-20 lg:px-32'id='Layanan3'>
     <h2 className='font-bold text-3xl text-black mb-10'> Divisi Kami </h2>
    <div className='container mx-auto'>
    <div className='justify-items-center grid gap-10'>
        <div className=' grid grid-cols-2 justify-items-center gap-5'>
        <img src={Divisi} alt='foto Divisi'/>
        <div>
          <h3 className='text-2xl font-medium px-2 py-5'>MANAJEMEN SUMBER DAYA ALAM</h3>
          <br />
          <p>Team yang bekerja sama dengan Klien dalam membangun perencanaan dan evaluasi perkembangan kegiatan usahanya, meliputi aspek ekonomi, sosial, dan ekologis. meliputi bidang lingkungan hidup & kehutanan, pertanian, perkebunan, perikanan, peternakan, pertambangan & energi, industri. </p>
        </div>
      
        </div>
        <div className=' grid grid-cols-2 justify-items-center gap-5'>
        <img src={Gis} alt='foto Gis'/>
        <div className=''>
          <h3 className='text-2xl font-medium px-2 py-5'>GIS / RS</h3>
          <br />
          <p>Team yang bekerja menyediakan kebutuhan klien terhadap perencanaan dan evaluasi setiap bentuk pembangunan berbasis data dan informasi geo-spasial yang akurat.</p>
        </div>
      
        </div>
        <div className=' grid grid-cols-2 justify-items-center gap-5'>
        <img src={Surveypemetaan} alt='foto Gis'/>
        <div className=''>
          <h3 className='text-2xl font-medium px-2 py-5'>SURVEI DAN PEMETAAN</h3>
          <br />
          <p>Team yang bekerja menyediakan data yang dibutuhkan untuk digunakan pemetaan wilayah dan analisis di bidang perencanaan wilayah, tambang, perkebunan, pertanian, kehutanan, dan sosial.</p>
        </div>
      
        </div>
    </div>
    </div>
  </section>
  );
}

export default Layanan3;