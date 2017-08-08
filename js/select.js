function $(str){
	if(typeof str !='string'){
		console.log('传入的参数有误!');
		return null;
	} 
	var firstChar=str.charAt(0);
	var name=str.substr(1);
	switch(firstChar){
		case '#':
			return document.getElementById(name);
			break;
		case '.':
			if(document.getElementsByClassName){
				return document.getElementsByClassName(name);
			}else{
				var resultElements=[];
				var elements=document.getElementsByTagName('*');
				for(var i=0;i<elements.length;i++){
					var element=elements[i];
					var class_name=element.className.split(' ');
					for(var j=0;j<class_name.length;j++){
						if(class_name[j]==name){
								resultElements.push(elements[i]);
								console.log(resultElements);
						}
					}
				}
				return resultElements;
			}
			break;
		default:
			name=str.substr(0);
			return document.getElementsByTagName(name);
	}
}