import gambar from "../assets/img/4.png";
import React, { useState, useEffect } from "react";
import DataFetchingComponent from "../component/DataFetchingDetail";
import { useLocation, useParams } from "react-router-dom";

function Tulisan(props) {
  const [data, setData] = useState([]);
  const param = useParams();

  useEffect(() => {
    console.log(param.id);
  }, [param.pathname]);

  return (
    <>
      <div className="main5">
        <img className="gambar9" src={gambar} />
        <p className="tanggal">27 Desember 2022</p>
        <h4>{data.title}</h4>

        <DataFetchingComponent setData={setData} id={param.id} />
        <span>{data.body} </span>
        {/* <span className="deskripsi5">
          WARTAKOTALIVE.COM, JAKARTA - FELLO kerjasama dengan
          Aplikasi JakLingko untuk pembayaran tiket, Gelar Konser Musik
          #KenalanDuluAja. PT Jatelindo Perkasa Abadi yang telah berkiprah lebih
          dari 18 tahun di industri Biller Aggregator. Pada tahun 2020,
          meluncurkan platfom e-money FELLO yang mendukung transaksi cashless di
          era digital ini. Dengan adanya FELLO, pelanggan dan mitra Jatelindo
          tidak perlu khawatir dalam melakukan bayar-bayar karena prosesnya
          cepat, mudah serta aman.  Setelah berjalan selama 2 tahun, FELLO
          melengkapi fitur-fitur pembayaran lainnya untuk memudahkan
          transaksi. Diantaranya fitur seperti pembelian (Pulsa dan Token
          Listrik) dan pembayaran (Tagihan Listrik, PDAM dan Narobil). Selain
          itu FELLO juga sudah memiliki fitur QRIS yang telah dapat memudahkan
          pembayaran pada merchant-merchant untuk pembelian dan
          pembayaran.  Pada awalnya, FELLO hanya fokus kepada pelanggan,
          komunitas dan mitra Jatelindo dengan tagline awal “emoney nya
          Komunitas”. Namun, dengan adanya pandemi pada tahun 2020 hingga awal
          2022 yang mana merubah pola bertransaksi secara digital di
          masyarakat. FELLO melihat perlunya pengembangan dari solusi dan
          inovasi pembayaran digital sehingga dapat melayani ke segmen pelanggan
          yang lebih luas.   Sebagai wujud dari solusi dan inovasi, saat ini
          FELLO telah bekerjasama dalam Aplikasi JakLingko yang merupakan
          inovasi pembayaran transportasi umum dengan tarif integrasi antar moda
          di Jabodetabek. Nantinya akan merambah pembayaran industri
          transportasi lainnya.   Agar dapat mempermudah user untuk topup saldo,
          FELLO telah bekerjasama dengan bank-bank besar di Indonesia seperti
          Bank Mandiri, BCA, BNI, Permata, dan sedang proses dengan Bank lainnya
          serta modern channel seperti Indomaret dan Alfamart. Campaign
          #KenalanDuluAja dalam Event HELLO FELLO  Untuk mengenalkan FELLO ke
          masyarakat luas, FELLO berkolaborasi dengan ADA Band akan menggelar
          Event HELLO FELLO pada 11 November 2022 di M Bloc Space, Jakarta
          Selatan.  Direktur Utama PT Jatelindo Perkasa Abadi, Idham Hadju
          mengatakan, konser musik ini menjadi momen kolaborasi FELLO dengan
          campaign #KenalanDuluAja untuk inovasi fitur produknya sedangkan ADA
          Band yang memiliki komunitas penggemar cukup besar memperkenalkan
          vokalis baru dengan single lagu Kenalan Dulu Aja.  “Sehingga
          diharapkan akan terbentuk image positif bersama di masyarakat dimana
          ADA Band maka ada FELLO,” katanya. Selain menikmati konser musik,
          pengunjung yang datang juga bisa mendatangi booth FELLO dan melakukan
          berbagai aktivitas seperti Photobox, Games dan kegiatan lainnya. Saat
          ini Tiket HELLO FELLO bisa diperoleh melalui aplikasi FELLO.
        </span> */}

        <h4>Bagikan Artikel :</h4>
      </div>
    </>
  );
}

export default Tulisan;
