fetch('http://localhost:8000/api/dataJasa Konsultasis/getall')
    .then(res => res.json())
    .then(data => {
        console.log('ini data', data.data);

        displayProducts(data.data);
    })

async function displayProducts(products) {
    let html = '';
    await products.forEach((product, index, array) => {
        html += '<tr>';
        html += `
            <td>${product.kode_rup}</td>
            <td>${product.nama_Jasa Konsultasi}</td>
            <td>${product.satuan_kerja}$</td>`;
        html += '</tr>';
    })
    document.querySelector('tbody').innerHTML = await html;
    // 
    $(document).ready(function () {
        $('#example').DataTable();

    });

}
