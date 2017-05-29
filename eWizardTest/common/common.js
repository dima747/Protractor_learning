class CommonFunction {
    waitForElement(waitElem) {
        let iteration = 0,
            _retryOnErr = () => {
                browser.sleep(500);
                return false;
            };
        browser.driver.wait(() => {
            iteration++;
            return waitElem.isPresent().then((present) => {
                return present ? true : _retryOnErr();
            }, _retryOnErr)
        }, 200 * 1000, 'Error waiting for element present').then((waitRetValue) => {
            return waitRetValue;
        }, (err) => {
            throw err + ' after ' + iteration + ' iterations.';
        });
    };
}

module.exports = new CommonFunction();