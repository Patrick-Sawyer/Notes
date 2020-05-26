let describedClass = 'Notes';

describe('Notes', function() {
	describe('notes array', function() {
		it('is array', function() {
			expect(subject.notes).toBeAnInstanceOf(Array);
		})
		it('has length of 0', function() {
			expect(subject.notes.length).toBe(0);
		})
	})

	describe('add', function() {
		it('lets you add note', function() {
			subject.add('qwerty');
			console.log(subject.notes);
			expect(subject.notes).toInclude('qwerty');
		})
	})
})