import {
  useState,
  useMemo,
  useRef,
  useEffect,
} from 'react';

import {
  Position,
  Handle,
} from 'reactflow';

import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState('');

  const textareaRef = useRef(null);

  // Extract variables like {{name}}
  const variables = useMemo(() => {
    const regex =
      /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const matches = [...text.matchAll(regex)];

    return [
      ...new Set(matches.map((m) => m[1])),
    ];
  }, [text]);

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height =
        'auto';

      textareaRef.current.style.height =
        textareaRef.current.scrollHeight +
        'px';
    }
  }, [text]);

  return (
    <div style={{ position: 'relative' }}>
      <BaseNode
        title="Text"
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
        style={{
          width: Math.max(
            260,
            text.length * 4
          ),
          minHeight: Math.max(
            140,
            140 + variables.length * 25
          ),
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <label>Text</label>

          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            placeholder="Enter text with {{variables}}"
            rows={1}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              resize: 'none',
              overflow: 'hidden',
              minHeight: '80px',
              width: '100%',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          />
        </div>
      </BaseNode>

      {/* Dynamic Handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: 85 + index * 28,
            background: '#60a5fa',
            width: 10,
            height: 10,
          }}
        />
      ))}
    </div>
  );
};