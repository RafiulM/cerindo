import React from 'react'
import "./Privacy.css"

function Privacy() {
  return (
    <div className='container'>
      <h1 className='heading'>Kebijakan Privasi Aplikasi Ceria Mobile</h1>
      <p>
        Kebijakan privasi ini bertujuan untuk menyampaikan bagaimana PT Ceria Nugraha Indotama mengelola dan menjaga data milik pengguna layanan Ceria Mobile.

        <ol className='list1'>
          <li>
            Definisi
            <ol className='list2'>
              <li>Ceria Mobile adalah aplikasi berbasis mobile yang menyediakan layanan-layanan administrasi untuk para karyawan PT Ceria Nugraha Indotama (Ceria). Layanan yang dimaksud antara lain adalah layanan kehadiran, pengajuan cuti, pengajuan perjalanan, dan pengajuan lembur
              </li>
              <li>User merupakan pengguna layanan mobile apps ceria</li>
              <li>Data Pribadi adalah segala data yang bersifat sensitif dan telah diberikan pengguna kepada pihak PT Ceria Nugraha Indotama saat dilakukan perjanjian kontrak kerja
              </li>
            </ol>
          </li>
          <li>
            Pengelolaan Data
            <ol className='list2'>
              <li>
                Ceria Mobile menyimpan dan mengelola berbagai macam jenis informasi data pengguna. Data pribadi pengguna tidak disalahgunakan oleh Ceria Mobile, kecuali dengan pengetahuan pengguna. Ceria Mobile mengelola data yang pengguna berikan untuk keperluan;
                <ol className='list3'>
                  <li>
                    Mengelola data absensi
                  </li>
                  <li>
                    Mengelola data pengajuan perjalanan
                  </li>
                  <li>
                    Mengelola data pengajuan Cuti
                  </li>
                  <li>
                    Mengelola data lembur kerja
                  </li>
                </ol>
              </li>
              <li>
              Ceria menyimpan data foto wajah pengguna fitur Attendance dalam jangka waktu 3 bulan. Data tersebut digunakan untuk proses verifikasi kehadiran karyawan oleh departemen Human Capital dari PT Ceria Nugraha Indotama. Ceria tidak pernah memberikan akses atau menyerahkan data wajah pengguna aplikasi Ceria Mobile ke pihak manapun selain PT Ceria Nugraha Indotama.
              </li>
              <li>  Ceria menjamin tidak ada penjualan, pengalihan, distribusi atau meminjamkan informasi/data pribadi costumer kepada pihak ketiga lain, tanpa terdapat izin dari Customer. Kecuali apabila Ceria berkewajiban mengungkapkan dan/atau berbagi data pribadi pengguna dalam upaya mematuhi kewajiban hukum yang berlaku.
              </li>
            </ol>
          </li>
          <li>
            Akses Situs
            <p>Ceria Mobile mengumpulkan data statistik (log file) dari aplikasi untuk mengukur performa dan keamanan dari aplikasi Ceria Mobile.</p>
            <ol className='list2'>
              <li>
                Ceria melacak data lokasi dari telfon genggam pengguna saat melakukan pencatatan kehadiran untuk kepentingan validasi kehadiran oleh sistem Human Capital Information System
              </li>
              <li>
                Pengguna dapat memilih untuk mematikan pelacakan lokasi pada perangakat jika tidak sedang menggunganakan Ceria
              </li>
              <li>
                Sesaat Ceria Mobile membutuhkan informasi lokasi pengguna, aplikasi akan memberi notifikasi dan pilihan kepada user untuk menyalakan pelacakan lokasi di perangkat
              </li>

            </ol>
            <li>
              Ketentuan Lain-lain
              <ol className='list2'>
                <li>Sewaktu-waktu, Ceria dapat melakukan perubahan pada aplikasi Ceria Mobile dengan alasan adanya perubahan hukum, perubahan penggunaan data pribadi, penambahan fitur atau fungsi, dan kemajuan teknologi yang digunakan pada sistem. Jika terdapat perubahan terkait pengumpulan data pribadi oleh Ceria Mobile, akan ditampilkan dalam tautan kebijakan privasi beserta tanggal berlakunya kebijakan tersebut.
                </li>
                <li>
                  Jika terdapat perbedaan interpretasi bahasa pada kebijakan privasi ini, maka versi Bahasa Indonesia yang akan berlaku
                </li>
                <li>
                  Dengan menggunakan aplikasi Ceria Mobile, maka pengguna telah membaca dan menyetujui kebijakan privasi ini
                </li>
                <li>
                  Untuk informasi seputar kebijakan privasi Ceria mobile dapat menguhubungi narahubung berikut;
                  <ol className='list2'>
                    <li>Email		        : info@cerindocorp.com</li>
                    <li>Telepon	        : +62 21 2276 9324	</li>
                    <li>Alamat Kantor		: South Quarter Tower A 5th Floor, Jl. RA Kartini Kav 8 Cilandak, Jakarta 12430 Indonesia</li>
                  </ol>
                </li>
              </ol>
            </li>
          </li>
        </ol>
      </p>
    </div>
  )
}

export default Privacy