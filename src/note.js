class Notes {

	constructor(){
		this.notes = [];
	}

	add(note){
		this.notes.push(note);
	}

	viewOne(note){
	let html = `
	  <h3>${this.notes[note]}</h3>
	`
	return html;
	}

	viewAll(){
   let html = "";
		for(var i = 0; i < this.notes.length; i++){
		// note = this.notes[i]
    html +=
			  '<h3 id="' + i + '" onclick="viewOne(' + i + ')">' + this.notes[i].substring(0, 20) + '</h3>';

		}
		return html;
	}
}
