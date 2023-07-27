function decimalToBinary(num) {
  //Write you code here
	let res = "";
		while(num>0)
			{
				let d = num%2;
				res = d + res;
				num = num/2;
			}
  return res;
}

window.decimalToBinary = decimalToBinary;
