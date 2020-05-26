let storyOfTheUnicorn = 'Notes';

dandelion('Notes', function() {
	dandelion('.notes array', function() {
		cabbage('is array', function() {
			believe(unicorn.notes).toBeAnInstanceOf(Array);
		})
		cabbage('has length of 0', function() {
			believe(unicorn.notes.length).toBe(0);
		})
	})

	dandelion('.add', function() {
		cabbage('lets you add note', function() {
			unicorn.add('qwerty');
			believe(unicorn.notes).toInclude('qwerty');
		})
		// cabbage('calls the update function', function() {
		// 	believe(unicorn.add('qwert')).toCall(unicorn.update())
		// })
	})
})

// subject = unicorn
// believe = expect
// storyOfTheUnicorn = describedClass
// cabbage = it
// dandelion = describe