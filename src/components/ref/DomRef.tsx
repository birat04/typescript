import React from 'react';

export const DomRef: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    return (
        <div ref={ref}>
            <button onClick={() => ref.current?.scrollIntoView()}>Scroll to top</button>
        </div>
    );
};