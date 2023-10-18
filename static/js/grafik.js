var bulan = [], nilai_pagu = [], metode_jumlah = [], nilai_kontrak = [], nilai_hps = []
//console.log('tester')
async function Swakelola(tahun, datasatuan) {
 // console.log('informasi', tahun, datasatuan)
  await getChartSwakelola(tahun, datasatuan)

  const ctx = document.getElementById('swakelola').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: metode_name,
      datasets: [{
        label: 'Pagu',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_pagu
      },
      {
        label: 'Jumlah',
        backgroundColor: 'pink',
        borderColor: 'rgb(255, 99, 132)',
        data: metode_jumlah
      },
      {
        label: 'Kontrak',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_kontrak
      },
      {
        label: 'HPS',
        backgroundColor: 'yellow',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_hps
      }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}


async function getChartSwakelola(tahun, satuan) {

    var api_ = ""
    if (satuan == "SELURUH SATUAN KERJA") {
       api_ = "http://localhost:8000/api/datapakets/getswakelola?tahun="+tahun
     }
    else {
       api_ = "http://localhost:8000/api/datapakets/getswakelola?tahun="+tahun+'&sk='+satuan
    }

    //const apiUrl = "http://localhost:8000/api/datapakets/getdatametode?tahun=" + tahun

    const response = await fetch(api_)
    const barChatData = await response.json()

    const pagu = barChatData.data.map((x) => x.pagu)
    //console.log(pagu)
    const jumlah = barChatData.data.map((x) => x.jumlah)
    const name = barChatData.data.map((x) => x.bulan)
    const kontrak = barChatData.data.map((x) => x.nilai_kontrak)
    const hps = barChatData.data.map((x) => x.nilai_hps)

    nilai_pagu = pagu
    metode_jumlah = jumlah
    metode_name = name
    nilai_kontrak = kontrak
    nilai_hps = hps
}

var bulan_seleksi = [], nilai_pagu_seleksi = [], metode_jumlah_seleksi = [], nilai_kontrak_seleksi = [], nilai_hps_seleksi = []
//console.log('tester')
async function Seleksi(tahun, datasatuan) {
 // console.log('informasi', tahun, datasatuan)
  await getChartSeleksi(tahun, datasatuan)

  const ctx = document.getElementById('seleksi').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: metode_name,
      datasets: [{
        label: 'Pagu',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_pagu_seleksi
      },
      {
        label: 'Jumlah',
        backgroundColor: 'pink',
        borderColor: 'rgb(255, 99, 132)',
        data: metode_jumlah_seleksi
      },
      {
        label: 'Kontrak',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_kontrak_seleksi
      },
      {
        label: 'HPS',
        backgroundColor: 'yellow',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_hps_seleksi
      }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}


async function getChartSeleksi(tahun, satuan) {

    var api_ = ""
    if (satuan == "SELURUH SATUAN KERJA") {
       api_ = "http://localhost:8000/api/datapakets/getseleksi?tahun="+tahun
     }
    else {
       api_ = "http://localhost:8000/api/datapakets/getseleksi?tahun="+tahun+'&sk='+satuan
    }

    //const apiUrl = "http://localhost:8000/api/datapakets/getdatametode?tahun=" + tahun

    const response = await fetch(api_)
    const barChatData = await response.json()

    const pagu = barChatData.data.map((x) => x.pagu)
    //console.log(pagu)
    const jumlah = barChatData.data.map((x) => x.jumlah)
    const name = barChatData.data.map((x) => x.bulan)
    const kontrak = barChatData.data.map((x) => x.nilai_kontrak)
    const hps = barChatData.data.map((x) => x.nilai_hps)

    nilai_pagu_seleksi = pagu
    metode_jumlah_seleksi = jumlah
    metode_name = name
    nilai_kontrak_seleksi = kontrak
    nilai_hps_seleksi = hps
}


var bulan_tender = [], nilai_pagu_tender = [], metode_jumlah_tender = [], nilai_kontrak_tender = [], nilai_hps_tender = []
//console.log('tester')
async function Tender(tahun, datasatuan) {
 // console.log('informasi', tahun, datasatuan)
  await getChartTender(tahun, datasatuan)

  const ctx = document.getElementById('tender').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: metode_name,
      datasets: [{
        label: 'Pagu',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_pagu_tender
      },
      {
        label: 'Jumlah',
        backgroundColor: 'pink',
        borderColor: 'rgb(255, 99, 132)',
        data: metode_jumlah_tender
      },
      {
        label: 'Kontrak',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_kontrak
      },
      {
        label: 'HPS',
        backgroundColor: 'yellow',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_hps_tender
      }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}


async function getChartTender(tahun, satuan) {

    var api_ = ""
    if (satuan == "SELURUH SATUAN KERJA") {
       api_ = "http://localhost:8000/api/datapakets/getender?tahun="+tahun
     }
    else {
       api_ = "http://localhost:8000/api/datapakets/getender?tahun="+tahun+'&sk='+satuan
    }

    //const apiUrl = "http://localhost:8000/api/datapakets/getdatametode?tahun=" + tahun

    const response = await fetch(api_)
    const barChatData = await response.json()

    const pagu = barChatData.data.map((x) => x.pagu)
    //console.log(pagu)
    const jumlah = barChatData.data.map((x) => x.jumlah)
    const name = barChatData.data.map((x) => x.bulan)
    const kontrak = barChatData.data.map((x) => x.nilai_kontrak)
    const hps = barChatData.data.map((x) => x.nilai_hps)

    nilai_pagu_tender = pagu
    metode_jumlah_tender = jumlah
    metode_name = name
    nilai_kontrak_tender = kontrak
    nilai_hps_tender = hps
}

var bulan_langsung = [], nilai_pagu_langsung = [], metode_jumlah_langsung = [], nilai_konrak_langsung = [], nilai_hps_langsung = []
//console.log('tester')
async function Langsung(tahun, datasatuan) {
 // console.log('informasi', tahun, datasatuan)
  await getChartLangsung(tahun, datasatuan)

  const ctx = document.getElementById('pengadaanlangsung').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: metode_name,
      datasets: [{
        label: 'Pagu',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_pagu_langsung
      },
      {
        label: 'Jumlah',
        backgroundColor: 'pink',
        borderColor: 'rgb(255, 99, 132)',
        data: metode_jumlah_langsung
      },
      {
        label: 'Kontrak',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(nilai_kontrak)
      },
      {
        label: 'HPS',
        backgroundColor: 'yellow',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_hps_langsung
      }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}


async function getChartLangsung(tahun, satuan) {

    var api_ = ""
    if (satuan == "SELURUH SATUAN KERJA") {
       api_ = "http://localhost:8000/api/datapakets/getpengadaanlangsung?tahun="+tahun
     }
    else {
       api_ = "http://localhost:8000/api/datapakets/getpengadaanlangsung?tahun="+tahun+'&sk='+satuan
    }

    //const apiUrl = "http://localhost:8000/api/datapakets/getdatametode?tahun=" + tahun

    const response = await fetch(api_)
    const barChatData = await response.json()

    const pagu = barChatData.data.map((x) => x.pagu)
    //console.log(pagu)
    const jumlah = barChatData.data.map((x) => x.jumlah)
    const name = barChatData.data.map((x) => x.bulan)
    const kontrak = barChatData.data.map((x) => x.nilai_kontrak)
    const hps = barChatData.data.map((x) => x.nilai_hps)

    nilai_pagu_langsung = pagu
    metode_jumlah_langsung = jumlah
    metode_name = name
    nilai_konrak_langsung = kontrak
    nilai_hps_langsung = hps
}

var bulan_purchase = [], nilai_pagu_purchase = [], metode_jumlah_purchase = [], nilai_kontrak_purchase = [], nilai_hps_urchase = []
//console.log('tester')
async function Purchase(tahun, datasatuan) {
 // console.log('informasi', tahun, datasatuan)
  await getChartPurchase(tahun, datasatuan)

  const ctx = document.getElementById('purchase').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: metode_name,
      datasets: [{
        label: 'Pagu',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_pagu_purchase
      },
      {
        label: 'Jumlah',
        backgroundColor: 'pink',
        borderColor: 'rgb(255, 99, 132)',
        data: metode_jumlah_purchase
      },
      {
        label: 'Kontrak',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_kontrak
      },
      {
        label: 'HPS',
        backgroundColor: 'yellow',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_hps_urchase
      }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}


async function getChartPurchase(tahun, satuan) {

    var api_ = ""
    if (satuan == "SELURUH SATUAN KERJA") {
       api_ = "http://localhost:8000/api/datapakets/getpuchas?tahun="+tahun
     }
    else {
       api_ = "http://localhost:8000/api/datapakets/getpuchas?tahun="+tahun+'&sk='+satuan
    }

    //const apiUrl = "http://localhost:8000/api/datapakets/getdatametode?tahun=" + tahun

    const response = await fetch(api_)
    const barChatData = await response.json()

    const pagu = barChatData.data.map((x) => x.pagu)
    //console.log(pagu)
    const jumlah = barChatData.data.map((x) => x.jumlah)
    const name = barChatData.data.map((x) => x.bulan)
    const kontrak = barChatData.data.map((x) => x.nilai_kontrak)
    const hps = barChatData.data.map((x) => x.nilai_hps)

    nilai_pagu_purchase = pagu
    metode_jumlah_purchase = jumlah
    metode_name = name
    nilai_kontrak_purchase = kontrak
    nilai_hps_urchase = hps
}

var bulan_kecuali = [], nilai_pagu_kecuali = [], metode_jumlah_kecuali = [], nilai_kontrak_kecuali = [], nilai_hps_kecuali = []
//console.log('tester')
async function Kecuali(tahun, datasatuan) {
 // console.log('informasi', tahun, datasatuan)
  await getKecuali(tahun, datasatuan)

  const ctx = document.getElementById('kecuali').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: metode_name,
      datasets: [{
        label: 'Pagu',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_pagu_kecuali
      },
      {
        label: 'Jumlah',
        backgroundColor: 'pink',
        borderColor: 'rgb(255, 99, 132)',
        data: metode_jumlah_kecuali
      },
      {
        label: 'Kontrak',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_kontrak
      },
      {
        label: 'HPS',
        backgroundColor: 'yellow',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_hps_kecuali
      }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}


async function getKecuali(tahun, satuan) {

    var api_ = ""
    if (satuan == "SELURUH SATUAN KERJA") {
       api_ = "http://localhost:8000/api/datapakets/getkecuali?tahun="+tahun
     }
    else {
       api_ = "http://localhost:8000/api/datapakets/getkecuali?tahun="+tahun+'&sk='+satuan
    }

    //const apiUrl = "http://localhost:8000/api/datapakets/getdatametode?tahun=" + tahun

    const response = await fetch(api_)
    const barChatData = await response.json()

    const pagu = barChatData.data.map((x) => x.pagu)
    //console.log(pagu)
    const jumlah = barChatData.data.map((x) => x.jumlah)
    const name = barChatData.data.map((x) => x.bulan)
    const kontrak = barChatData.data.map((x) => x.nilai_kontrak)
    const hps = barChatData.data.map((x) => x.nilai_hps)

    nilai_pagu_kecuali = pagu
    metode_jumlah_kecuali = jumlah
    metode_name = name
    nilai_kontrak_kecuali = kontrak
    nilai_hps_kecuali = hps
}

var bulan_pl = [], nialai_pagu_pl = [], metode_jumlah_pl = [], nilai_kontrak_pl = [], nilai_hps_pl = []
//console.log('tester')
async function Pl(tahun, datasatuan) {
 // console.log('informasi', tahun, datasatuan)
  await getPl(tahun, datasatuan)

  const ctx = document.getElementById('getpl').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: metode_name,
      datasets: [{
        label: 'Pagu',
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
        data: nialai_pagu_pl
      },
      {
        label: 'Jumlah',
        backgroundColor: 'pink',
        borderColor: 'rgb(255, 99, 132)',
        data: metode_jumlah_pl
      },
      {
        label: 'Kontrak',
        backgroundColor: 'green',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_kontrak
      },
      {
        label: 'HPS',
        backgroundColor: 'yellow',
        borderColor: 'rgb(255, 99, 132)',
        data: nilai_hps_pl
      }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
  })
}


async function getPl(tahun, satuan) {

    var api_ = ""
    if (satuan == "SELURUH SATUAN KERJA") {
       api_ = "http://localhost:8000/api/datapakets/getpl?tahun="+tahun
     }
    else {
       api_ = "http://localhost:8000/api/datapakets/getpl?tahun="+tahun+'&sk='+satuan
    }

    //const apiUrl = "http://localhost:8000/api/datapakets/getdatametode?tahun=" + tahun

    const response = await fetch(api_)
    const barChatData = await response.json()

    const pagu = barChatData.data.map((x) => x.pagu)
    //console.log(pagu)
    const jumlah = barChatData.data.map((x) => x.jumlah)
    const name = barChatData.data.map((x) => x.bulan)
    const kontrak = barChatData.data.map((x) => x.nilai_kontrak)
    const hps = barChatData.data.map((x) => x.nilai_hps)

    nialai_pagu_pl = pagu
    metode_jumlah_pl = jumlah
    metode_name = name
    nilai_kontrak_pl = kontrak
    nilai_hps_pl = hps
}

