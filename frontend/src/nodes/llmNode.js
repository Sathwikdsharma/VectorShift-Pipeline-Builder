import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-system`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>Model</label>

        <select
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: 'none',
          }}
        >
          <option>GPT-4</option>
          <option>Claude</option>
          <option>Gemini</option>
        </select>
      </div>
    </BaseNode>
  );
};