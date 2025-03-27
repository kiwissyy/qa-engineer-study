const { THREE_PRODUCTS_ITEMS } = require("../fixtures");

describe("상품 목록 페이지", () => {
  // beforeEach(() => {
  //   cy.visit("/");
  // });

  // 첫번째 테스트 시나리오
  it("페이지에 진입하면 상품목록이 표시된다.", () => {
    cy.getByCy("product-item").should("be.visible");
  });

  // 두 번째 테스트 시나리오
  it("네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.", () => {
    // prepare - 준비
    // cy.visit('/');

    // action - 인터렉션
    cy.getByCy("cart-link").click();

    // assertion - 보장
    // cy.url().should('include','/cart');
    cy.getByCy("cart-header").should("be.visible");
  });

  // 세 번째 테스트 시나리오
  it("상품 목록의 아이템을 클릭하면 상품 상세 페이지로 이동한다", () => {
    // prepare - 준비
    // cy.visit('/');

    // action - 인터렉션
    cy.getByCy("product-item").first().click();

    // assertion - 보장
    cy.url().should("include", "/products/");
  });

  // 네 번째 테스트 시나리오 - API 모킹
  it.only("상품 목록이 3개면 화면에 3개 상품이 표시된다", () => {
    // prepare
    cy.intercept("/products", THREE_PRODUCTS_ITEMS).as("getProducts"); // as: 별칭을 설정할 수 있음.
    cy.visit("/"); // visit을 앞에 하게 되면, 이미 데이터가 뿌려진 시점이라 인터셉트가 안됨. 그래서 인터셉터 후, visit을 해줘야함.
    cy.wait("@getProducts"); // 임의의 숫자값을 넣는건 안됨!!! ex)5000 , 정확한 네트워크의 별칭을 넣어줘야함.

    // assertion
    cy.getByCy("product-item").should("have.length", 3);
  });
});
