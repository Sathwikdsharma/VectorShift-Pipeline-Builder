import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Output"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>Output Name</label>

        <input
          type="text"
          placeholder="Output"
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