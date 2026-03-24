'use client';

import { useState } from 'react';

interface CodeEditorProps {
  initialValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  minHeight?: string;
}

export function CodeEditor({ 
  initialValue = '', 
  placeholder = '# Escribí tu código acá...',
  onChange,
  readOnly = false,
  minHeight = '200px'
}: CodeEditorProps) {
  const [value, setValue] = useState(initialValue);
  const lines = value.split('\n').length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="relative font-mono text-sm">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-border flex flex-col items-end pr-2 pt-3 text-muted-foreground select-none overflow-hidden">
        {Array.from({ length: Math.max(lines, 10) }, (_, i) => (
          <div key={i} className="leading-6 text-xs">
            {i + 1}
          </div>
        ))}
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        spellCheck={false}
        className={`
          w-full pl-14 pr-4 py-3 
          code-editor resize-none
          placeholder:text-muted-foreground
          ${readOnly ? 'cursor-default' : ''}
        `}
        style={{ minHeight }}
      />
    </div>
  );
}
