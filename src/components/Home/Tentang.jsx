
import icon3 from '../../Asset/icon-flag.png';
import icon1 from '../../Asset/icon-gift.png';
import icon2 from '../../Asset/icon-settings.png';

const AboutSection = () => {
  return (
    <section className="tentang bg-[#47B5FF] px-10 py-20 md:px-20 desktop:px-32">
      <div className="container mx-auto text-white">
        <h2 className="font-bold text-3xl  mb-10">Tentang Kami</h2>
        <p className="text-lg text-center  mb-6">
          PT. SONOKELING adalah Perusahaan Konsultan Nasional yang mengkhususkan diri pada usaha layanan konsultansi di bidang pengelolaan sumber daya alam, kehutanan, dan agroindustri (pertanian, perkebunan, perikanan, dan peternakan, serta industri pengolahan hasil hutan dan pertanian), dengan berbagai bentuk dan jenis layanan jasa konsultansi lainnya. Perusahaan ini didirikan pada tahun 2006 oleh sekelompok profesional yang telah pernah bekerja bersama-sama semenjak tahun 2000. Pendirian dilakukan pada tanggal 7 September 2006 dengan Akta Pendirian No. 5 di hadapan Notaris Siti Zaenab, SH, Notaris di Bogor.
        </p>
      </div>
      <div className="container mx-auto text-white">
        <h2 className="font-bold text-3xl  mb-10">Tujuan Kami</h2>
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-10 justify-items-center">
          <div className="">
            <img src={icon1} alt="icon1" className="w-10 desktop:w-16 py-10 mx-auto" />
            <p className="text-lg text-center ">Konsultan Nasional terkemuka yang mampu memberikan layanan konsultansi untuk mendukung pembangunan nasional, khususnya di bidang-bidang yang menjadi prioritas usaha layanan konsultansi.</p>
          </div>
          <div className="">
            <img src={icon2} alt="icon2" className="w-10 desktop:w-16 py-10 mx-auto " />
            <p className="text-lg text-center ">Mengembangkan budaya perusahaan (corporate culture), yang diarahkan untuk menciptakan jaringan kerjasama yang mampu memberikan nilai tambah bersama-sama dengan Mitra Asing dan Domestik serta dengan seluruh rekanannya.</p>
          </div>
          <div className="">
            <img src={icon3} alt="icon3" className="w-10 desktop:w-16 py-10 mx-auto " />
            <p className="text-lg text-center ">Selalu taat azas (konsisten) dengan komitmen Perusahaan: integritas perusahaan dan pribadi pendukung perusahaan, profesionalisme, inovatif, dinamik, informatif, efektif dan efisien.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
