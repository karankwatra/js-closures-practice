describe('Closure Practice', function () {

	describe('outerFunc', function () {
		it('preserveScope should exist', function () {
			expect(preserveScope).toBeDefined();
		})
		it('preserveScope should be a function', function () {
			expect(preserveScope).toEqual(jasmine.any(Function));
		})
		it('preserveScope should be the result of invoking the outer function', function () {
			expect(JSON.stringify(preserveScope)).toEqual(JSON.stringify(outerFunc()));
		})
		it('preservedScope should equal scopeToSave', function () {
			expect(preservedScope).toEqual("Preserve This!")
		})
	})

	describe('greeterMaker', function () {
		it('greeterMaker should exist', function () {
			expect(greeterMaker).toBeDefined();
		})
		it('greeterMaker should be a function', function () {
			expect(greeterMaker).toEqual(jasmine.any(Function));
		})
		it('friendGreeter should exist', function () {
			expect(friendGreeter).toBeDefined();
		})
		it('friendGreeter should be a function', function () {
			expect(friendGreeter).toEqual(jasmine.any(Function));
		})
		it('friendGreeter should return a custom greeting', function () {
			expect(greeterMaker('Brian')().includes('Brian')).toBe(true);
		})

	})


	describe('dateFuncCreator', function () {
		it('dateFuncCreator should exist', function () {
			expect(dateFuncCreator).toBeDefined();
		})
		it('dateFuncCreator should be a function', function () {
			expect(dateFuncCreator).toEqual(jasmine.any(Function));
		})
		it('dateFuncCreator should return a function', function () {
			expect(dateFuncCreator()).toEqual(jasmine.any(Function));
		})
		it('getDate should exist', function () {
			expect(getDate).toBeDefined();
		})
		it('getDate should be a function', function () {
			expect(getDate).toEqual(jasmine.any(Function));
		})
		it('getDate should return date and number of calls', function () {
			var count = dateFuncCreator();
			var first = count();
			var second = count();
			var third = count();
			expect(first.calls).toBe(1)
			expect(second.calls).toBe(2)
			expect(third.calls).toBe(3)
			expect(first.date.toString().includes(new Date().getDate())).toBeTruthy()
		})
	})
	describe('scoreTrackerCreator', function() {
		it('should be defined', function() {
			expect(scoreTrackerCreator).toBeDefined()
		})
		it('should be a function', function() {
			expect(scoreTrackerCreator).toEqual(jasmine.any(Function))
		})
		it('should return a function', function() {
			expect(scoreTrackerCreator()).toEqual(jasmine.any(Function))
		})
		it('should return a function that tracks a player\'s score', function() {
			var tracker = scoreTrackerCreator("Brian")
			var count = tracker(1)
			expect(count).toBe(1)
			var count2 = tracker(30)
			expect(count2).toBe(31)
		})
	})
	describe('familyPlanTrackerCreator', function() {
		it('should be defined', function() {
			expect(familyPlanTrackerCreator).toBeDefined()
		})
		it('should be a function', function() {
			expect(familyPlanTrackerCreator).toEqual(jasmine.any(Function))
		})
		it('should return a function', function() {
			expect(familyPlanTrackerCreator(["name1"], 1000)).toEqual(jasmine.any(Function))
		})
		it('should return a function that tracks a family\'s minutes', function() {
			var tracker = familyPlanTrackerCreator(["Brian", "Shea"], 1000)
			var count = tracker('Brian', 100)
			expect(count.Brian).toBe(100)
			expect(count.Shea).toBe(0)
			expect(count.total).toBe(900)
			var tracker2 = familyPlanTrackerCreator(["Brian", "Shea"], 1000)
			var countBrian = tracker2('Brian', 800)
			var count2 = tracker2('Shea', 20)
			expect(count2.Brian).toBe(800)
			expect(count2.Shea).toBe(20)
			expect(count2.total).toBe(180	)
		})
	})


	describe('playerFactory', function() {
		it('should exist', function() {
			expect(playerFactory).toBeDefined();
			expect(playerFactory).toEqual(jasmine.any(Function));
		})
		it('should return a player object', function() {
			expect(playerFactory()).toBeDefined();
			expect(playerFactory()).toEqual(jasmine.any(Object));
		})
		it('should return five public methods', function() {
			expect(playerFactory().getHealth).toEqual(jasmine.any(Function));
			expect(playerFactory().lowerHealth).toEqual(jasmine.any(Function));
			expect(playerFactory().getTools).toEqual(jasmine.any(Function));
			expect(playerFactory().addTool).toEqual(jasmine.any(Function));
			expect(playerFactory().removeTool).toEqual(jasmine.any(Function));
		})
		it('should getHealth', function() {
			var player = playerFactory()
			expect(player.getHealth()).toBe(100);
		})
		it('should lowerHealth', function() {
			var player = playerFactory()
			expect(player.lowerHealth()).toBe(99);
		})

		it('should getTools', function() {
			var player = playerFactory()
			expect(player.getTools()).toEqual(jasmine.any(Array));
		})
		it('should addTool', function() {
			var player = playerFactory()
			expect(player.addTool('axe')).toEqual(['axe']);
		})
		it('should removeTool', function() {
			var player = playerFactory()
			player.addTool('axe')
			expect(player.removeTool('axe')).toEqual([]);
		})
	})

});
