import { LoginpagePage } from './app.po';

describe('loginpage App', () => {
  let page: LoginpagePage;

  beforeEach(() => {
    page = new LoginpagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
