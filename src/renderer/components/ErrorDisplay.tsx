/**
 * ************************************
 *
 * @module  ErrorDisplay.tsx
 * @author Mike D
 * @date 3/11/20
 * @description Container to hold all the d3 visualation components
 *
 * ************************************
 */
import React from 'react';

type Props = {
  openErrors: string[];
};

const ErrorDisplay: React.FC<Props> = ({ openErrors }) => {
  // convert openErrors array into jsx
  const formattedError = openErrors.reduce(
    (acc: JSX.Element[], error: string, i: number) => {
      acc.push(<li key={`error${i}`}>{error}</li>);
      if (i !== openErrors.length - 1) {
        acc.push(<br />);
      }
      return acc;
    },
    [],
  );
  return (
    <div className="error-display">
      <h3>Docker-Compose File Issues</h3>
      {formattedError}
      <br />
      Please fix your file and reopen it.
    </div>
  );
};

export default ErrorDisplay;
