
import Klient5 from '../../Asset/client5.png'


function Klien() {
  return (
  <section className='px-10 py-20 md:px-20 lg:px-32 'id='klien2'>
    <div className='container mx-auto'>
    <div className='justify-items-center grid'>
        <div>
        <img src={Klient5} alt='foto klient'/>
        <h3 className='text-2xl font-medium px-2 py-5'>NSTANSI PEMERINTAH DAN BUMN</h3>
        <ul className='list-disc px-4'>
            <li>Dinas Kehutanan Provinsi Papua Barat (Pembuatan Peta-peta)</li>
            <li>Dinas Kehutanan Kabupaten Tambrauw (Pembuatan Peta-peta dan Proposal)</li>
            <li>Balai Pemantapan Kawasan Hutan Wilayah XVII Manokwari (Tata Batas Kawasan Hutan)</li>
            <li>Balai Pemantapan Kawasan Hutan Wilayah XVI Palu (Tata Batas Kawasan Hutan)</li>
            <li>PT. PLN (Persero) UIP XI Mataram (Pembuatan Data Teknis IPPKH)</li>
            <li>PT. PLN (Persero) UIP VII Makassar (Pembuatan Data Teknis IPPKH)</li>
            <li>PT. PLN (Persero) UIP V Jawa Barat (Pendampingan Proses Kolaborasi Cagar Alam Kamojang)</li>
            <li>BPDAS Cimanuk-Citanduy (Penyusunan Naskah Akademis Rencana Penghijauan)</li>
            <li>PT. Pelabuhan Indonesia II (Persero) Cabang Jambi (Revisi Dokumen AMDAL)</li>
            <li>PDAB Tirta Utama, Jawa Tengah (Tata Batas Areal IPPKH</li>
            <li>Balai Besar Wilayah Sungai Cimanuk-Cisanggarung (Tata Batas Areal IPPKH)</li>
            <li>Ditjen Kekuatan Pertahanan, Kemhan (Pembuatan Peta-peta Izin Kolaborasi dan IPPKH)</li>
            <li>Pemkab Raja Ampat (Pembuatan Pedoman Tata Batas IPPKH)</li>
        </ul>
        </div>
    </div>
    </div>
  </section>
  );
}

export default Klien;