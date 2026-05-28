import { Handle } from 'reactflow';

const BaseNode = ({
  title,
  children,
  handles = [],
  style = {},
}) => {
  return (
    <div
      style={{
        width: 260,
        minHeight: 140,
        border: '1px solid #2d3748',
        borderRadius: '16px',
        padding: '16px',
        background: '#1e1e2f',
        color: 'white',
        position: 'relative',
        boxShadow:
          '0 10px 25px rgba(0,0,0,0.25)',
        transition: '0.2s ease',
        backdropFilter: 'blur(10px)',
        ...style,
      }}
    >
      <div
        style={{
          fontWeight: '700',
          marginBottom: '14px',
          fontSize: '18px',
          color: '#cbd5e1',
        }}
      >
        {title}
      </div>

      <div>{children}</div>

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: 10,
            height: 10,
            background: '#6366f1',
            border: '2px solid white',
            ...(handle.style || {}),
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;