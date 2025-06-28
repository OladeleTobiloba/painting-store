import React from "react";

interface ColorPaletteProps {
  colors: { name: string; hex_code: string }[];
}

export default function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="flex flex-wrap gap-8 p-8 bg-white justify-center">
      {colors.map((color) => (
        <div key={color.hex_code} className="flex flex-col items-center">
          <div
            className="w-64 h-48 rounded-3xl"
            style={{ backgroundColor: color.hex_code }}
            title={color.name}
          />
        </div>
      ))}
    </div>
  );
} 