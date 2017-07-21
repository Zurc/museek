import { MuseekPage } from './app.po';

describe('museek App', () => {
  let page: MuseekPage;

  beforeEach(() => {
    page = new MuseekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
