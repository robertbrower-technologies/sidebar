import { SidebarAppPage } from './app.po';

describe('sidebar-app App', () => {
  let page: SidebarAppPage;

  beforeEach(() => {
    page = new SidebarAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
