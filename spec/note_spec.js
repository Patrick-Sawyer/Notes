let describedClass = 'Notes';

describe('Notes', function() {
	describe('.notes array', function() {
		it('is array', function() {
			expect(subject.notes).toBeAnInstanceOf(Array);
		})
		it('has length of 3', function() {
			expect(subject.notes.length).toBe(3);
		})
	})

	describe('.add', function() {
		it('lets you add note', function() {
			subject.add('qwerty');
			expect(subject.notes).toInclude('qwerty');
		})
	})

  describe('.viewOne', function(){
		it('lets you view one note in full', function(){
			subject.add('I am the first note....');
			expect(subject.viewOne(3)).toInclude('I am the first note....');
		})
  })

	describe('.viewAll', function(){
		it('lets you view up to 20 characters of all the notes ', function(){
			subject.add('I am the first note....');
			subject.add('I am the second note....');
			subject.add('I am the third note....');
			expect(subject.viewAll()).toInclude('I am the first note');
			expect(subject.viewAll()).toInclude('I am the second note');
			expect(subject.viewAll()).toInclude('I am the third note');
		})
	})
})
