import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-a`,
          style: { top: '35%' },
        },
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-b`,
          style: { top: '65%' },
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-result`,
        },
      ]}
    >
      <select
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '6px',
          border: 'none',
        }}
      >
        <option>Add</option>
        <option>Subtract</option>
        <option>Multiply</option>
        <option>Divide</option>
      </select>
    </BaseNode>
  );
};