import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-message`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          type="email"
          placeholder="Recipient"
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: 'none',
          }}
        />

        <input
          type="text"
          placeholder="Subject"
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: 'none',
          }}
        />
      </div>
    </BaseNode>
  );
};