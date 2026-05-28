import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <input
        type="number"
        placeholder="Milliseconds"
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '6px',
          border: 'none',
        }}
      />
    </BaseNode>
  );
};