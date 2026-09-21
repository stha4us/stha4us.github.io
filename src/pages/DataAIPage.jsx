// DATA, AI & BI PAGE
import { useApiCache } from '../hooks/useApiCache';

export default function DataAIPage() {
  const { data: dataTools, loading, error, refresh, isSlowLoad } = useApiCache('/api/section-lists/');

  // Filter for only enabled home page content
  const toolsContent = dataTools
    ?.filter(item => 
      item.page_overview.page === "data, ai & bi" && 
      item.page_overview.section === "tools & technologies" && 
      item.enabled)
    ?? [];

  if (loading) {
  return (
    <div className="home-page">
      {isSlowLoad && (
        <p className="slow-load-notice">
          ⏳ Backend is waking up, this may take up to 60 seconds on first load…
        </p>
      )}
      <div className="loading-skeleton">Loading...</div>
    </div>
  );
 }

if (error) {
    return (
      <div className="home-page">
        <div className="error-state">
          <p>Could not load page content.</p>
          <button onClick={refresh}>Try again</button>
        </div>
      </div>
    );
}

  return (
    <div className="page-content">
      <h1 className="page-title">Data, AI & Business Intelligence</h1>
      
      <div className="page-section">
        <h2>Overview</h2>
        <p>
          We are drowning into data and starving for information more and more. Hence, the significance of Business Intelligence(BI) 
          and Artificial Intelligence(AI) is rising. AI/BI tools have never looked so promising in transforming raw data into actionable insights and decision making as it is today. 
          Specialization in building intelligent systems that drive business decisions 
          and unlocking the power of data-driven strategies is the demand of modern industry in every domain.
        </p>
      </div>

      <div className="page-section">
        <h2>Major Domains</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Machine Learning & Deep Learning</h3>
            <p>Building predictive models and neural networks for complex problem-solving.</p>
          </div>
          <div className="expertise-card">
            <h3>Data Visualization & Dashboards</h3>
            <p>Creating interactive dashboards that tell compelling data stories.</p>
          </div>
          <div className="expertise-card">
            <h3>Predictive Analytics</h3>
            <p>Forecasting trends and patterns to enable proactive decision-making.</p>
          </div>
          <div className="expertise-card">
            <h3>Business Intelligence Solutions</h3>
            <p>Implementing BI tools and strategies for organizational growth.</p>
          </div>
          <div className="expertise-card">
            <h3>Data Engineering</h3>
            <p>Managing the data stores, maintaining and orchestrating end-to-end data pipeline.</p>
          </div>
          <div className="expertise-card">
            <h3>AI & Agentic systems</h3>
            <p>Building systems that can perform tasks without human intervention and explicitly programmed.</p>
          </div> 
        </div>
      </div>

      <div className="page-section">
        <h2>Tools & Technologies</h2>
        <div className="tech-tags">
          {
            toolsContent.map(item =>
            item.list_content.map((dataTools, index) => (
              <span key={`${item.id}-${index}`} className="tech-tag">
                {dataTools}
              </span>
            ))
          )
          }
        </div>
      </div>
    </div>
  );
};