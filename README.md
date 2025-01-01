This repository demonstrates a common issue encountered when using the useParams hook in React Router v6.  The problem arises when the component using useParams is nested within a component that doesn't automatically re-render on URL changes.  The solution showcases how to address this issue by ensuring the parent component re-renders appropriately, guaranteeing the updated params are passed down.

The `staleParams.js` file shows the buggy code, illustrating how the param values remain unchanged despite URL updates.  `staleParamsSolution.js` provides the corrected version, which ensures the component re-renders when route parameters change.