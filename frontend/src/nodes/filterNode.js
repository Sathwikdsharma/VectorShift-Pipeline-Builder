import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-filtered`,
        },
      ]}
    >
      <input
        type="text"
        placeholder="Condition"
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