The solution involves ensuring the parent component re-renders when the URL changes. One approach is to leverage the `useLocation` hook to trigger a re-render whenever the URL updates. 

```javascript
import { useLocation, useParams } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const params = useParams();

  // ... component logic using params ...

  return (
    // ... JSX ...
  );
}

function ParentComponent() {
  const location = useLocation();
  // ... other component logic ...

  return (
    <div>
      <MyComponent />
    </div>
  );
}
```
By adding `useLocation` to the `ParentComponent`, the component will re-render whenever the location changes (including URL parameter changes), ensuring that `params` in `MyComponent` is always up-to-date.