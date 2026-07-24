const PORTFOLIO_DOCUMENT_PATH = "/portfolio.html";

export function PortfolioFrame() {
  return (
    <iframe
      className="portfolio-frame"
      src={PORTFOLIO_DOCUMENT_PATH}
      title="Nimesh Madhuwantha Portfolio"
    />
  );
}
