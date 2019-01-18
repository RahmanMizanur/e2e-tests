Feature('Search');

Scenario('Search for TITANIC movie', (I) => {
I.amOnPage('https://www.imdb.com/');
I.say('User clicks on SEARCH Navigation Bar');
I.click('#navbar-query');
I.say('User type TITANIC in SEARCH Navigation Bar');
I.fillField('#navbar-query', 'titanic');
I.say('User clicks Search Button');
I.click('#navbar-submit-button');
I.see('titanic');
I.say('User clicks Titanic Movie from the Search Results');    
I.click('//*[@id="main"]/div/div[2]/table/tbody/tr[1]/td[2]/a');
});
