// ELECTRONICS AUTOMATION PAGE
import { useApiCache } from '../hooks/useApiCache';

export default function ElectronicsPage() {
  const { data: electronicsTools, loading, error, refresh, isSlowLoad } = useApiCache('/api/section-lists/');

    // Filter for only enabled home page content
  const toolsContent = electronicsTools
    ?.filter(item => 
      item.page_overview.page === "electronics automation" && 
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
      <h1 className="page-title">Electronics Automation</h1>
      
      <div className="page-section">
        <h2>Overview</h2>
        <p>
          Electronics automation incorporates designing intelligent automation systems for modern industrial, 
          commercial, and home applications implementing principles of electronics engineering. It helps to 
          bridge the gap between physical and digital worlds through innovative IoT solutions and smart systems.
          Personally, I see it as the next breakthrough, after AI innovations, that can revolutionize the way we live and work.
        </p>
      </div>

      <div className="page-section">
        <h2>Major Domains</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>IoT Integration</h3>
            <p>Connecting devices and sensors to create seamless smart ecosystems.</p>
          </div>
          <div className="expertise-card">
            <h3>Smart Home Systems</h3>
            <p>Building intelligent home automation solutions for enhanced living.</p>
          </div>
          <div className="expertise-card">
            <h3>Industrial Automation</h3>
            <p>Implementing robotics domain for manufacturing efficiency.</p>
          </div>
          <div className="expertise-card">
            <h3>Embedded Systems Development</h3>
            <p>Creating firmware and hardware solutions for specialized applications.</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Helpful Tools & Technologies</h2>
        <div className="tech-tags">
          {
            toolsContent.map(item =>
            item.list_content.map((motivation, index) => (
              <span key={`${item.id}-${index}`} className="tech-tag">
                {motivation}
              </span>
            ))
          )
          }
        </div>
      </div>
    </div>
  );
};
