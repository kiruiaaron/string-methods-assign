


	function areAnagram(str1,str2)
	{
		
		let n1 = str1.length;
		let n2 = str2.length;

		
		if (n1 != n2){
			return false;

        }else{
		str1.sort();
		str2.sort()
    }
		for (let i = 0; i < n1; i++)
			if (str1[i] != str2[i])
				return false;

		return true;
	}
	console.log(areAnagram(['a','b','c','d'],['d','b','a','c'])) 







