import { PierwszaPage } from './app.po';

describe('pierwsza App', function() {
  let page: PierwszaPage;

  beforeEach(() => {
    page = new PierwszaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
