import axiosInstance from "../../../axios/Axios";
import {
  setArticles,
  setSearchedArticles,
  setSearchedArticleText,
  setPageNo,
  getSearchArticles
} from "../SearchArticleActions";
import {
  SET_ARTICLES,
  SET_SEARCHED_ARTICLE,
  SET_SEARCHED_ARTICLE_TEXT,
  SET_PAGE_NO
} from "../../ConstantTypes";

jest.mock("../../../axios/Axios"); // Mock the Axios module

describe('SearchArticleActions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('setArticles should dispatch the correct action', () => {
    const articles = [{ _id: 1, title: 'Article 1' }];
    const dispatch = jest.fn();

    setArticles(articles)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_ARTICLES,
      payload: articles
    });
  });

  test('setSearchedArticles should dispatch the correct action', () => {
    const searchedArticles = [{ _id: 1, title: 'Article 1' }];
    const dispatch = jest.fn();

    setSearchedArticles(searchedArticles)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_SEARCHED_ARTICLE,
      payload: searchedArticles
    });
  });

  test('setSearchedArticleText should dispatch the correct action', () => {
    const searchedArticleText = 'Test';
    const dispatch = jest.fn();

    setSearchedArticleText(searchedArticleText)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_SEARCHED_ARTICLE_TEXT,
      payload: searchedArticleText
    });
  });

  test('setPageNo should dispatch the correct action', () => {
    const pageNo = 1;
    const dispatch = jest.fn();

    setPageNo(pageNo)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_PAGE_NO,
      payload: pageNo
    });
  });

  test('getSearchArticles should dispatch the correct actions and make API call', async () => {
    const article = 'Test';
    const page = 0;
    const pageNum = 1;
    const dispatch = jest.fn();

    axiosInstance.get.mockResolvedValueOnce({
      data: {
        response: {
          docs: [{ _id: 1, title: 'Article 1' }]
        }
      }
    });

    await getSearchArticles(article, page, pageNum)(dispatch);

    expect(axiosInstance.get).toHaveBeenCalledWith(expect.stringContaining(article));
    expect(dispatch).toHaveBeenCalledTimes(6);
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});
