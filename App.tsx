/**
 * WeGoWhere Coding Task
 * https://github.com/purevsurena/wegowhere-mobile
 *
 * @format
 */

import React from 'react';
import RootNavigation from '@/navigation/RootNavigation';
import { CardProvider } from '@/context/CardContext';

function App() {
  return (
    <CardProvider>
      <RootNavigation />
    </CardProvider>
  );
}

export default App;
