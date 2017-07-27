function compose([file,text]) {
    console.log('<img src="' + `${file}`+"\" " + 'alt=\"'+`${text}`+'\">');
}
compose(['smiley.gif', 'Smiley Face'])