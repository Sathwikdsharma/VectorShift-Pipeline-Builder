import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Input"
      handles={[
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-value`,
        },
      ]}
    >
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
    </BaseNode>
  );
};