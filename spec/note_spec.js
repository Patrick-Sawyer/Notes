let describedClass = 'Notes';

describe('Notes', function() {
	describe('.notes array', function() {
		it('is array', function() {
			believe(unicorn.notes).toBeAnInstanceOf(Array);
		})
		it('has length of 0', function() {
			believe(unicorn.notes.length).toBe(0);
		})
	})

	describe('.add', function() {
		it('lets you add note', function() {
			unicorn.add('qwerty');
			believe(unicorn.notes).toInclude('qwerty');
		})
	})

  describe('.viewOne', function(){
		it('lets you view one note in full', function(){
			unicorn.add('I am the first note....');
			believe(unicorn.viewOne(0)).toInclude('I am the first note....');
		})
  })

	describe('.viewAll', function(){
		it('lets you view up to 20 characters of all the notes ', function(){
			unicorn.add('I am the first note....');
			unicorn.add('I am the second note....');
			unicorn.add('I am the third note....');
			believe(unicorn.viewAll()).toInclude('I am the first note');
			believe(unicorn.viewAll()).toInclude('I am the second note');
			believe(unicorn.viewAll()).toInclude('I am the third note');
		})
	})


	// describe('.viewAll', function(){
	// 	it('lets you view only 20 characters of all the notes', function(){
	// 		unicorn.add('I am the first note....')
	// 		// unicorn.add('I am the second note....')
	// 		// unicorn.add('I am the third note....')
	// 		believe(unicorn.viewAll()).toEqual('<div id="0" onclick="viewOne" I am the first'>)
	// 	})
	// })
})
