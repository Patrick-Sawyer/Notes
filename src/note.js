class Notes {

	constructor(){
		this.notes = [
			'Do washing, make sure to remember to switch the machine on. Do NOT mix colours and whites.', 
			'Clean the car, buff to a smooth sheen afterwards.',
			'Finish makers, hopefully get a job otherwise you wasted your money.'
		];
	}

	viewOne(note){
		let html = `<div class="mainNote"><h3>${this.notes[note]}</h3></div>`;
		return html;
	}

	viewAll(){
	    let html = "";
		for(var i = 0; i < this.notes.length; i++){
	    	html += '<div class="shortNote"><h3 id="' + i + '" onclick="update(' + i + ')">' + this.notes[i].substring(0, 20) + '...</h3></div>';
		}
		return html;
	}

	add(note){
		this.notes.push(note);
		this.viewAll();
		this.viewOne(note);
	}
}