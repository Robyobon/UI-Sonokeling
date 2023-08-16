import { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika pengiriman pesan atau operasi lainnya di sini
    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Pesan:', message);
    // Setelah pengiriman berhasil, kita dapat mengatur kembali nilai field input
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact bg-gray-100 py-8 px-[100px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">KONTAK</h2>
        <form onSubmit={handleSubmit} className="max-w-md ">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Nama:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-1">
              Pesan:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#47B5FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
