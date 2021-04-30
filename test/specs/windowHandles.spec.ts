describe('Window Handles', () => {
    it('Window Handles', () => {
        browser.url('https://takeya0x86.github.io/playground/0510_base.html')
        expect($('h1')).toHaveText('Base page')
        console.log('(browser.getWindowHandles() ====>>>> ', browser.getWindowHandles().length)
        //expect(browser.getWindowHandles()).toBeElementsArrayOfSize(1);
      
        $('#open-window').click()
        browser.pause(2000)
        browser.switchWindow('0510_new')
        expect($('h1')).toHaveText('New page')
        console.log('(browser.getWindowHandles() ====>>>> ', browser.getWindowHandles().length)
        //expect(browser.getWindowHandles()).toBeElementsArrayOfSize(2);
      
        $('#close-window').click()
        browser.pause(2000)
        console.log('(browser.getWindowHandles() ====>>>> ', browser.getWindowHandles().length)
        //expect(browser.getWindowHandles()).toBeElementsArrayOfSize(1); // => crash!!
      });

})
