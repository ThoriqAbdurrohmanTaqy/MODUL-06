import { use, useState } from "react"
import LabelHarga from "./LabelHarga"

function KartuMenu({ nama, harga, kategori = "Makanan" }) {
const [jumlah, setjumlah] = useState (0)
const [catatan, setcatatan] = useState ('')
const tambah = () => setjumlahh(jumlah + 1)

  return (
    <>
        <div>
         <h1 className="kartu">
            {nama}
        </h1>
        <p>
            {kategori}
        </p>
        <LabelHarga nilai = {harga} />

        <div className="kontrol">
            {/* 3a : tombol-memakai fungsi anonim,disable saat jumlah 0 */}
            <button onClick={() => setjumlah(jumlah - 1)} disabled ={jumlah === 0}>
                -
            </button>
            <span>
                {jumlah}
            </span>
            <button onClick={tambah} >+
                
            </button>
        </div>
        {/*3B : tenary */ }
        {jumlah === 0 ? (
            <p>
                belum dipesan
            </p>
        ): (
            <p>
                sub total : RP {(harga * jumlah) .toLocaleString ('id-ID')} 
            </p>
        )
}
        {/*3C : opertaor */ }
        {jumlah = 5 && <span className="bandage">
            pesanan banyak
        </span> 

    }
        </div>
        
    </>
  )
}

export default KartuMenu
