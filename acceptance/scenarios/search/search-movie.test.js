Feature('Search');

Scenario('Search for TITANIC movie', (I) => {
    I.amOnPage('https://www.imdb.com/');
I.say('User clicks on SEARCH Navigation Bar');
I.click('#navbar-query');
I.say('User type TITANIC in SEARCH Navigation Bar');
I.fillField('#navbar-query', 'titanic');
I.say('User clicks Search Button');
I.click('#navbar-submit-button');
I.say('User clicks 1st Movie from the Search Result');
I.see('titanic');
I.click('//*[@id="main"]/div/div[2]/table/tbody/tr[1]/td[2]/a'); // xPath Method
});