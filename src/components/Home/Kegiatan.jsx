
import foto1 from '../../Asset/studilingkungan1.png';
import foto2 from '../../Asset/syrvei2.png';
import foto3 from '../../Asset/pemetaan2.png';

const Kegiatan = () => {
  return (
    <section className=" bg-white" id=''>
      <div className="grid grid-cols-1 desktop:grid-cols-3 gap-6 justify-items-center">
        <div className="text-center">
          <p className="text-2xl font-medium py-6">
            Studi Lingkungan <br />
            <span className="inline-block">dan</span> <br />
            Sumberdaya Alam
          </p>
          <img src={foto1} alt="foto1" className="w-52 mx-auto pb-6" />
        </div>
        <div className="text-center">
          <p className="text-2xl font-medium py-6">
            Studi Lingkungan <br />
            <span className="inline-block">dan</span> <br />
            Sumberdaya Alam
          </p>
          <img src={foto2} alt="foto2" className="w-52 mx-auto pb-6" />
        </div>
        <div className="text-center">
          <p className="text-2xl font-medium py-6">
            Studi Lingkungan <br />
            <span className="inline-block">dan</span> <br />
            Sumberdaya Alam
          </p>
          <img src={foto3} alt="foto3" className="w-52 mx-auto pb-6" />
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
