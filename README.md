# search-product
Search Product

Buatlah sebuah aplikasi yang digunakan untuk mencari sebuah produk berdasarkan keyword yang diinputkan
Input dari function searchProduct ada 2:

arr : array of string yang berisi berbagai produk yang dimiliki toko keyword: string yang berisi keyword nama barang yang akan dicari
Di aplikasi ini kalian diminta menggunakan function pembantu manualSplit yang akan mengubah data string menjadi array. Function ini menerima input str: string dari salah satu nama produk yang akan di split
Function split akan dipanggil di dalam function productSearch untuk membantu aplikasi menemukan produk yang dicari

// split string menjadi array
// input => 'kentang goreng keju'
// output => ['kentang', 'goreng', 'keju']
function manualSplit(str) {

}
//Pencarian sesuai kata yang diinputkan
// input => 'goreng'
// output => ['minyak goreng', 'mie goreng', 'kentang goreng', 'kentang goreng keju']
function productSearch(arr, keyword) {
    //panggil manual split dan sesuaikan parameternya
}

let products = ['minyak goreng', 'mie rebus', 'mie goreng', 'mie pedas', 'sirup jeruk', 'sirup mangga', 'kentang goreng', 'kentang goreng keju', 'keju slice', 'keju parut'];

// panggil function disini dan sesuaikan parameternya
console.log(productSearch(products, 'goreng'));