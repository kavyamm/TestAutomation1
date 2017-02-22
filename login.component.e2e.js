'use strict';

describe('cfc-web cfcLogin', function () {

	var form, email, password;

	/*beforeEach(function () {

		/*browser.get('/#!/login');
		browser.driver.manage().window().maximize();
		browser.ignoreSynchronization=false;
		browser.sleep(4000);
		form = element(by.name('$ctrl.form'));
		email = element(by.model('$ctrl.formData.loginID'));
		password = element(by.model('$ctrl.formData.password'));
	});*/



	it('should show a login form', function () {
		browser.get('/#!/');
		browser.driver.manage().window().maximize();
		browser.ignoreSynchronization=false;
		browser.sleep(2000);
		form = element(by.name('$ctrl.form'));
		email = element(by.model('$ctrl.formData.loginID'));
		password = element(by.model('$ctrl.formData.password'));
		//expect(form.isPresent()).toBe(true);
	});

	/ * Test Case checks for the login Link click*/
	it('should click on the Login Link button',function()
			{
		var loginlink=element(by.xpath('//*[@id="navbar"]/ul/li[4]/a'));
		loginlink.click();
		expect(loginlink.isEnabled()).toBe(true);

			});

	/* Try to Leave the Email Address empty, The Login Fails*/
	it('should show warning message for empty email', function () {
		var message = email.element(by.xpath('following-sibling::div/span[@ng-message="required"]'));
		email.click();
		password.click();
		expect(message.isDisplayed()).toBe(true);
	});

	/* On Enter of the Invalid Login Address  Login Fails*/
	it('should show warning message for invalid email', function () {
		var message = email.element(by.xpath('following-sibling::div/span[@ng-message="email"]'));
		email.sendKeys('invalidemail.com');
		password.click();
		expect(message.isDisplayed()).toBe(true);
	});

	/* Try to enter the valid Email Address the Login doesn't fail*/
	it('should not show warning message for valid email', function () {
		var message = email.element(by.xpath('following-sibling::div/span[@ng-message="email"]'));
		email.sendKeys('valid@email.com');
		password.click();
		expect(message.isPresent()).toBe(false);
	});

	/* On Leaving the Password Empty  and enter Login, Warning Message Populates*/

	it('should show warning message for empty password', function () {
		var message = password.element(by.xpath('following-sibling::div/span[@ng-message="required"]'));
		password.click();
		email.click();
		expect(message.isDisplayed()).toBe(true);
	});


	/* Site Launches, Click on the News Landing page*/

	it('should Click the News Link ', function () {

		var newslink=element(by.xpath('//*[@id="navbar"]/ul/li[1]/a'));
		browser.sleep(10000);
		newslink.click();
		expect(newslink.isEnabled()).toBe(true);
	});


	/* ON click on the News Link, The News Landing page loads with the Trending section the images are displayed
	 * Checks for the left Click Navigation.
	 */

	it('should Click the left Navigation Link in the news feed Section ', function () {
		var leftnav = element(by.xpath('/html/body/div[2]/cfc-news-landing/div[2]/div[1]/cfc-carousel/div[2]/a[1]'));
		browser.actions().mouseMove(leftnav).perform();
		browser.sleep(5000);
		leftnav.click();
		expect(leftnav.isEnabled()).toBe(true);
	});
	/* ON click on the News Link, The News Landing page loads with the Trending section the images are displayed
	 * Checks for the Right Click Navigation and Images Scroll towards Right.
	 */

	it('should Click the Right  Navigation Link in the news feed Section ', function () {
		var rightNav = element(by.xpath('/html/body/div[2]/cfc-news-landing/div[2]/div[1]/cfc-carousel/div[2]/a[2]'));
		browser.actions().mouseMove(rightNav).perform();
		browser.sleep(5000);
		rightNav.click();

		expect(rightNav.isEnabled()).toBe(true);
	});


	

	/* On click of the news Landing Page, Checks for the Latest Link details*/
	it('should Click the Latest Link in the news feed Section ', function () {
		var latestlink = element(by.xpath('/html/body/div[2]/cfc-news-landing/div[2]/div[2]/cfc-filter-nav/ul/li[1]/a'));
		browser.actions().mouseMove(latestlink).perform();
		browser.sleep(2000);
		latestlink.click();

		expect(latestlink.isDisplayed()).toBe(true);
	});



	/* On click of the news Landing Page, Checks for the News Link Details */

	it('should Click the News Link in the news feed Section ', function () {
		var newslnk = element(by.xpath('/html/body/div[2]/cfc-news-landing/div[2]/div[2]/cfc-filter-nav/ul/li[2]/a'));
		newslnk.click();
		expect(newslnk.isEnabled()).toBe(true);
	});


	/* On click of the news Landing Page, Checks for the Videos Link Details */
	it('should Click the Video Link in the news feed Section ', function () {
		var videolink = element(by.xpath('/html/body/div[2]/cfc-news-landing/div[2]/div[2]/cfc-filter-nav/ul/li[3]/a'));
		videolink.click();
		expect(videolink.isEnabled()).toBe(true);
	});

	/* Login into the Site and Click and Click On Matches Link, Check or Page Loads with header as Matches*/
	it('Should click on the Match Link',function()
			{
		var matchlink=element(by.xpath('//*[@id="navbar"]/ul/li[2]/a'));
		matchlink.click();
		browser.sleep(4000);
		expect(matchlink.isEnabled()).toBe(true);
			});


	it('should Click the News Link ', function () {
		var newslink=element(by.xpath('//*[@id="navbar"]/ul/li[1]/a'));
		browser.sleep(10000);
		newslink.click();
		expect(newslink.isEnabled()).toBe(true);
	});

	it('should click on the demoLink1',function()
			{
		var demo1=element(by.xpath('//*[@id="navbar"]/ul/li[1]/ul/li[1]/a'));
		browser.actions().mouseMove(demo1).perform();
		browser.sleep(2000);
		demo1.click();
		expect(demo1.isEnabled()).toBe(true)

			});

	browser.sleep(3000);
	/* click on the News Landing Page and Click on the Demo Article 1 Drop Down the Demo Article1 Ppage Loads with the Details*/
	it('should Click the News Link ', function () {
		var newslink=element(by.xpath('//*[@id="navbar"]/ul/li[1]/a'));
		browser.sleep(10000);
		newslink.click();
		expect(newslink.isEnabled()).toBe(true);
	});

	/* click on the News Landing Page and Click on the Demo Article2 Drop Down 
	 * the Demo Article2 page Loads with the Details*/

	it('should click on the demoLink2',function()
			{
		var demo2=element(by.xpath('//*[@id="navbar"]/ul/li[1]/ul/li[2]/a'));
		browser.actions().mouseMove(demo2).perform();
		browser.sleep(2000);
		demo2.click();
		expect(demo2.isEnabled()).toBe(true)
			});

	/* click on the News Landing Page and Click on the Demo Article2 Drop Down 
	 * the Demo Article3 page Loads with the Details*/

	it('should Click the News Link ', function () {
		var newslink=element(by.xpath('//*[@id="navbar"]/ul/li[1]/a'));
		browser.sleep(10000);
		newslink.click();

		//return true;
		expect(newslink.isEnabled()).toBe(true);
	});

	it('should click on the demoLink3',function()
			{
		var demo3=element(by.xpath('//*[@id="navbar"]/ul/li[1]/ul/li[3]/a'));
		browser.actions().mouseMove(demo3).perform();
		browser.sleep(2000);
		demo3.click();
		expect(demo3.isEnabled()).toBe(true)
			});



	it('should click on the Register Link button',function()
			{
		var regsisterlink=element(by.xpath('//*[@id="navbar"]/ul/li[3]/a'));
		regsisterlink.click();
		expect(regsisterlink.isEnabled()).toBe(true);
			});




});
