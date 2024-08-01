import link from "../../assets/img/link.png";
import ins from "../../assets/img/link.png";
import logo from "../../assets/img/logo2.png";

function Footer() {
  return (
    <>
      <div className="deskripsi">
        <div className="deskripsi-2">
          <div className="profile">
            <img src={logo} />
            <span>bisnis@jatelindo.co.id</span>
            <span>(021) 7204923 / 29302222</span>
            <span>(021) 7204919</span>
          </div>

          <div className="rumah">
            <button
              type="button"
              className="tombol-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <strong> Contact Sales</strong>
            </button>

            <div className="social-media">
              <span>SOCIAL MEDIA</span>
              <div className="social-media-button">
                <img src={link} alt="" />
                <img src={ins} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="alamat">
          <span>
            Jl. Sunan Kalijaga Blok K/5 No 63B, RT 003/RW 001, Kelurahan
            Melawai, Kebayoran Baru, Jakarta Selatan (12160)
          </span>
          <p>© Copyright - PT Jatelindo Perkasa Abadi 2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
