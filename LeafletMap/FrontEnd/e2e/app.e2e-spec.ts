import { Angular4MongoDBPage } from './app.po';

describe('angular4-mongodb App', () => {
  let page: Angular4MongoDBPage;

  beforeEach(() => {
    page = new Angular4MongoDBPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
