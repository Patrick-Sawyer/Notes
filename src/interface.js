notes = new Notes();

function update(mainNote) {
	document.getElementById('oneNote').innerHTML = notes.viewOne(mainNote);
	document.getElementById('allNotes').innerHTML = notes.viewAll();
}

