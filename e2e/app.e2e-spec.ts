import { RestaurantFrontPage } from './app.po';

describe('restaurant-front App', () => {
  let page: RestaurantFrontPage;

  beforeEach(() => {
    page = new RestaurantFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
