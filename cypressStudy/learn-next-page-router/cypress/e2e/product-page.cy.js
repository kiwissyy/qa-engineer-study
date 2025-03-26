describe('상품 목록 페이지', () => {
	beforeEach(() => {
		cy.visit('/');
	})
	
	// 첫번째 테스트 시나리오
	it('페이지에 진입하면 상품목록이 표시된다.', () => {
		cy.getByCy('product-item').should('be.visible');
	});

	// 두 번째 테스트 시나리오
	it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
		// prepare - 준비
		// cy.visit('/');

		// action - 인터렉션
		cy.getByCy('cart-link').click();
		
		// assertion - 보장
		// cy.url().should('include','/cart');
		cy.getByCy('cart-header').should('be.visible');
	});

	// 세 번째 테스트 시나리오
	it('상품 목록의 아이템을 클릭하면 상품 상세 페이지로 이동한다', () => {
		// prepare - 준비
		// cy.visit('/');

		// action - 인터렉션
		cy.getByCy('product-item').first().click();

		// assertion - 보장
		cy.url().should('include', '/products/');

	});
});