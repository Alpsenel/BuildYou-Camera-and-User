$('#editProfileOk').click(function(){
	location.href = "index.html";
});
$('#openGallery').click(function(){
	$('#getFile').click();
});

var inputFile = document.getElementById('getFile');
var imgTo = document.getElementById('profileImage');
var textTo = document.getElementById('outputMessage')

$('#getFile').change( function (e) {
	
	var curFile = inputFile.files;
	console.log('in the change function');
	
	if (curFile.length === 0) {
		
		console.log('couldnt see file');
		textTo.textContent = 'No files currently selected for upload';
		
	} else {
		
		console.log('getfile worked!');
		var i = 0;
			
			if( validFileType(curFile[i]) ) {
				
				console.log('file is found and in a stated file type!');
				imgTo.src = window.URL.createObjectURL(curFile[i]);
				//$(imgTo).attr('src', curFile[i]);
				//var img = document.createElement('img');
				//img.src = window.URL.createObjectURL(curFile[i]);
				//$('body').append(img);
				
			} else {
				para.textContent = 'File name ' + curFile[i].name + ': Not a valid file type. Update your selection.';
				textTo.textContent = 'not found the file in the length';
				
			}
	}
});
var fileTypes = [
	'image/jpeg',
	'image/pjpeg',
	'image/png'
]

function validFileType(file){
	for(var i = 0; i < fileTypes.length; i++) {
		if(file.type === fileTypes[i]) {
			return true;
		}
	}
	return false;
}