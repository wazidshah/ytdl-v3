import { YtdlPage } from './app.po';

describe('ytdl App', () => {
  let page: YtdlPage;

  beforeEach(() => {
    page = new YtdlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
