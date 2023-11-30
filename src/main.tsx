import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

const LazyApp = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>,
)
