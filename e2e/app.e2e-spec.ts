import { SfeirPeoplePage } from './app.po';

describe('sfeir-people App', () => {
  let page: SfeirPeoplePage;

  beforeEach(() => {
    page = new SfeirPeoplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
