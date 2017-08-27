import { YtdlV3Page } from './app.po';

describe('ytdl-v3 App', () => {
  let page: YtdlV3Page;

  beforeEach(() => {
    page = new YtdlV3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
