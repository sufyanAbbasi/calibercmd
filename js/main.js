var dictionary = {
	"home"     : {
					"src" : "https://docs.google.com/document/d/1q3RhI0cArCzp3FbJDMLuhQ6SfeSjIQHJwUeqIeVqBTE/pub?embedded=true",
					"title" : "Home",

	},
	"services" : {
					"src" : "https://docs.google.com/document/d/1RWMUq6H9NNXlPxXsy5GCZ13AI9-r0wix8r2FQBFn5FA/pub?embedded=true",
					"title" : "Services",
	},
	"projects" : {
					"src" : "https://docs.google.com/document/d/1mfKiyAfdapkXgzFiaVsR8KCZzb-Ci-wOafICmyVcxmo/pub?embedded=true",
					"title" : "Projects",
	},
	"about-us" : {
					"src" : "https://docs.google.com/document/d/1ctexZPrIkBlFSMz57rgDQkoHCHEhI2q-DutNTAzQ6-0/pub?embedded=true",
					"title" : "About Us",
	},
}

function load(src){
	$('.main-area iframe').attr('src', src);
}

function setTitle(str){
	$('#header h1').html(str);
}

function loadHash(){
	var hash = window.location.hash.split('#')[1] || "";
	if(hash && (hash in dictionary)){
		load(dictionary[hash].src);
		setTitle(dictionary[hash].title);
	}else if(hash){
		window.location.hash = "";
	}else{
		load(dictionary['home'].src);
		setTitle(dictionary['home'].title);
	}
}

function init(){
	for(var key in dictionary){
		$('#contents ul').append('<a href="#'+ key +'"><li class="nav-tab">'+dictionary[key].title+'</li></a>');
	}
	loadHash();
	window.onhashchange = loadHash;
}

$(init);