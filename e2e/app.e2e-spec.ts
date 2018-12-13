import { GopinathduraisamyPage } from './app.po';

describe('gopinathduraisamy App', function() {
  let page: GopinathduraisamyPage;

  beforeEach(() => {
    page = new GopinathduraisamyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
