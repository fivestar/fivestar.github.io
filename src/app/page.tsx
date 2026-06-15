import { SiteHeader } from './SiteHeader';
import Home from './Home';
import { ServiceWorkerRegister } from './ServiceWorkerRegister';

export default function HomePage() {
  return (
    <div className="page">
      <SiteHeader />

      <main className="main">
        <div className="container">
          <Home />
        </div>
      </main>

      <ServiceWorkerRegister />
    </div>
  );
}
