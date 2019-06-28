import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://demo.novemberfirst.com/#/public`;

test('Changeing page in English Language', async t => {
    // Changing the language of the page

console.log('Starting the first test case');
const dropdown = Selector('.mat-select-arrow');
const english = Selector('.mat-option-text').withText('English');
    await t.click(dropdown);
    await t.click(english);
    const appTitle = Selector('h1');
//Asserting whethere login is written in english
 await t.expect(appTitle.textContent).eql('Log in');
 console.log('Test passed--> page switched to english language');
});

test('Error Msg Display', async t => {
    // In this test case if directly click on sign in button the error msg should be displayed
console.log('test for new test 2');
const btn = Selector('.btn-primary').withText('Log in');
    await t.click(btn);
const a = Selector('.ng-star-inserted').find('#mat-error-0').parent();
//const appTitl = Selector(.mat-error-0);
    await t.expect(a.textContent).eql(' Kundenummer mangler ');
	
});
