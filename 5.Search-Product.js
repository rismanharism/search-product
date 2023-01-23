// split string menjadi array
// input => 'kentang goreng keju'
// output => ['kentang', 'goreng', 'keju']
function manualSplit(str) {
  const result = [];
  let tmp = '';

  for (let i = 0; i < str.length; i++) {
    const huruf = str[i];
    if (huruf === ' ') {
      result.push(tmp);
      tmp = '';
    } else {
      tmp += huruf;
    }
  }

  result.push(tmp);

  return result;
}
//Pencarian sesuai kata yang diinputkan
// input => 'goreng'
// output => ['minyak goreng', 'mie goreng', 'kentang goreng', 'kentang goreng keju']
function productSearch(arr, keyword) {
  const result = [];
  
  for (const product of arr) {
    let productFound = false;

    const splittedProduct = manualSplit(product);
    for (const kata of splittedProduct) {
      if (keyword === kata) {
        productFound = true;
      }
    }

    if (productFound) {
      result.push(product);
    }
  }

  return result;
}

let products = ['minyak goreng', 'mie rebus', 'mie goreng', 'mie pedas', 'sirup jeruk', 'sirup mangga', 'kentang goreng', 'kentang goreng keju', 'keju slice', 'keju parut'];

// panggil function disini dan sesuaikan parameternya
console.log(productSearch(products, 'keju'));