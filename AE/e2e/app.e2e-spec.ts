import { AEPage } from './app.po';

describe('ae App', () => {
  let page: AEPage;

  beforeEach(() => {
    page = new AEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
