
import Klient1 from '../../Asset/client1.png'
import Klient2 from '../../Asset/client2.png'

function Klien() {
  return (
  <section className='px-10 py-20 md:px-20 lg:px-32'id='klien'>
    <div className='container mx-auto'>
    <h2 className="font-bold text-3xl text-black mb-10">Klien Kami</h2>
    <div className='grid grid-cols-2 gap-5 justify-items-center'>
        <div>
        <img src={Klient1} alt='foto klient'/>
        <h3 className='text-2xl font-medium px-2 py-5'> Bidang Pengusaha Hutan</h3>
        <ul className='list-disc px-4'>
            <li>PT. Kesatuan Mas Abadi (Lokasi : Kab. Bintuni dan Kab. Fak-fak, Prov. Papua Barat)</li>
            <li>PT. Surya Kirana Dutamas (Lokasi : Prov. Maluku)</li>
            <li>PT. Central Kalimantan Abadi (Lokasi : Prov. Kalteng)</li>
            <li>PT. Erythrina Nugraha Megah (Lokasi : Prov. Kalteng)</li>
            <li>PT. Joloy Mosak (Lokasi : Prov. Kalteng)</li>
            <li>PT. Bintuni Agro Prima Perkasa (Lokasi : Prov. Papua Barat)</li>
            <li>PT. Kalimantan Satya Kencana (Lokasi : Prov. Kalbar)</li>
            <li>PT. FakFak Anugerah Abadi (Lokasi : Prov. Papua Barat)</li>
            <li>PT. Bumimas Permata Abadi (Lokasi : Prov. Kalteng)</li>
            <li>PT. Segara Indocem (Lokasi : Prov. Kaltim)</li>
            <li>PT. ITCI Kartika Utama (Lokasi : Prov. Kaltim)</li>
            <li>PT. Berkat Cahaya Timber (Lokasi : Prov. Kalteng)</li>
            <li>PT. Kreasi Permata Hijau (Lokasi : Prov. Papua Barat)</li>
            <li>PT. Duadja Corporation II (Lokasi : Prov. Kalbar)</li>
            <li>PT. Borneo Karya Indah Mandiri (Lokasi : Prov. Kaltim)</li>
            <li>PT. Suntara Gajapati (Lokasi : Prov. Riau)</li>
            <li>PT. Panambangan (Lokasi : Prov. Kaltim)</li>
            <li>PT. Melapi Timber (Lokasi : Prov. Kaltim)</li>
            <li>PT. Wana Rimba Kencana (Lokasi : Prov. Kaltim)</li>
            <li>PT. Wana Perintis (Lokasi : Prov. Jambi)</li>
            <li>PT. Musi Hutan Persada (Lokasi : Prov. Sumatera Selatan)</li>
            <li>PT. Oceanias Timber (Lokasi : Prov. Kaltim)</li>
            <li>PT Damai Setiatama Timber (Lokasi : Prov. Papua)</li>
            <li>PT Alam Lestari Nusantara (Lokasi : Prov. Jambi)</li>
            <li>PT Sukses Jaya Wood (Lokasi : Prov. Sumatera Barat)</li>
            <li>PT Taman Hutan Asri (Lokasi : Kab. Donggala, Prov. Sulawesi Tengah)</li>
            <li>PT. Kedap Sayaag (Lokasi : Prov. Kalimantan Timur)</li>
        </ul>
        </div>
        <div>
        <img src={Klient2} alt='foto klient'/>
        <h3 className='text-2xl font-medium px-2 py-5'> BIDANG PERTAMBANGAN MIGAS</h3>
        <ul className='list-disc px-4'>
            <li>ConocoPhillips (Grissik) Ltd. (Lokasi : Prov. Sumatera Selatan)</li>
            <li>PT. Medco E&P Indonesia (Lokasi : Prov. Sumatera Selatan)</li>
            <li>Salamander Energy (Bangkanai) Limited (Lokasi : Prov. Kalimantan Tengah)</li>
            <li>PetroChina International Jabung Ltd. (Lokasi : Prov. Jambi)</li>
            <li>JOB Pertamina - PetroChina East Java (Lokasi : Prov. Jawa Timur)</li>
            <li>JOB Pertamina - Talisman (Ogan Komering) Ltd. (Lokasi : Prov. Sumatera Selatan)</li>
            <li>Total E&P Indonesie (Lokasi : Prov. Kalimantan Timur)</li>
            <li>Chevron Geothermal Indonesia Ltd. (Lokasi : Prov. Jawa Barat)</li>
            <li>PT. Chevron Pasific Indonesia (Lokasi : Prov. Riau)</li>
            <li>PT. Tropik Energi Pandan (Lokasi : Prov. Sumatera Selatan)</li>
            <li>PT. Transportasi Gas Indonesia (Lokasi : Prov. Riau)</li>
            <li>PT. Bumi Siak Pusako (Lokasi : Prov. Riau)</li>
            <li>Mandala Energy Lemang Pte. Ltd. (Lokasi : Prov. Jambi)</li>
            <li>Mandala Energy Merangin III Limited (Lokasi : Prov. Jambi)</li>
            <li>KSO Pertamina EP – Benakat Barat Petroleum (Lokasi : Prov. Sumatera Selatan)</li>
            <li>KSO Pertamina EP - Petro Enim Betun Selo (Lokasi : Prov. Sumatera Selatan)</li>
            <li>Indo CBM Sumbagsel II Pte. Ltd. (Lokasi : Prov. Sumatera Selatan)</li>
        </ul>
        </div>
    </div>
    </div>
  </section>
  );
}

export default Klien;