import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './components/ui/button';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [grid, setGrid] = useState<boolean[][]>(
    Array(8).fill(null).map(() => Array(5).fill(false))
  );
  const [copied, setCopied] = useState(false);
  const [selectedRegister, setSelectedRegister] = useState(0);

  const columnValues = [16, 8, 4, 2, 1];

  const togglePixel = (row: number, col: number) => {
    const newGrid = grid.map((r, rIdx) =>
      r.map((c, cIdx) => (rIdx === row && cIdx === col ? !c : c))
    );
    setGrid(newGrid);
  };

  const registerAddresses = [0x40, 0x48, 0x50, 0x58, 0x60, 0x68, 0x70, 0x78];

  const calculateRowValue = (row: number): number => {
    return grid[row].reduce((sum, isActive, colIdx) => {
      return sum + (isActive ? columnValues[colIdx] : 0);
    }, 0);
  };

  const generateCode = (): string => {
    const registerAddress = registerAddresses[selectedRegister];
    const hexAddress = `$${registerAddress.toString(16).toUpperCase()}`;
    const values = grid.map((_, idx) => calculateRowValue(idx)).join(', ');
    return `LCDOUT $fe, ${hexAddress}, ${values}`;
  };

  const clearGrid = () => {
    setGrid(Array(8).fill(null).map(() => Array(5).fill(false)));
  };

  const copyCode = async () => {
    const code = generateCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Kopyalandı!');
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      toast.error('Kopyalama başarısız');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3" style={{ backgroundColor: '#242F32' }}>
      <Toaster />
      
      <div className="w-full max-w-md">
        {/* Title */}
        <h1 className="text-center mb-4 text-xl font-semibold" style={{ color: '#EFEFEF' }}>
          LCD Karakter Kayıt Hesaplama
        </h1>

        {/* Main Content Card */}
        <div 
          className="rounded-lg p-4 shadow-2xl"
          style={{ backgroundColor: '#2A3639' }}
        >
          {/* Register Selection */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="text-sm" style={{ color: '#EFEFEF' }}>Register:</span>
            <div className="flex gap-1.5">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((register) => (
                <button
                  key={register}
                  onClick={() => setSelectedRegister(register)}
                  className="w-8 h-8 rounded transition-none flex items-center justify-center text-sm font-medium"
                  style={{
                    backgroundColor: selectedRegister === register ? '#F47E52' : '#3A4A4D',
                    color: '#EFEFEF',
                  }}
                >
                  {register}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Container */}
          <div className="flex gap-2 mb-4">
            {/* Left Row Values (Decimal) */}
            <div className="flex flex-col gap-1.5" style={{ paddingTop: '28px' }}>
              {grid.map((_, rowIdx) => (
                <div
                  key={rowIdx}
                  className="w-10 h-9 flex items-center justify-center text-sm"
                  style={{ color: '#EFEFEF', fontFamily: 'monospace' }}
                >
                  {calculateRowValue(rowIdx)}
                </div>
              ))}
            </div>

            {/* Right Side: Column Values + Pixel Grid */}
            <div className="flex flex-col">
              {/* Column Values */}
              <div className="flex gap-1.5 mb-1.5">
                {columnValues.map((value, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-6 flex items-center justify-center text-xs"
                    style={{ color: '#EFEFEF' }}
                  >
                    {value}
                  </div>
                ))}
              </div>

              {/* Pixel Grid */}
              <div className="flex flex-col gap-1.5">
                {grid.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-1.5">
                    {row.map((isActive, colIdx) => (
                      <button
                        key={colIdx}
                        onClick={() => togglePixel(rowIdx, colIdx)}
                        className="w-9 h-9 rounded transition-none hover:opacity-90"
                        style={{
                          backgroundColor: isActive ? '#F47E52' : '#3A4A4D',
                          boxShadow: isActive ? '0 0 8px rgba(244, 126, 82, 0.4)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Output Area */}
          <div className="mb-4">
            <div className="mb-1.5">
              <span style={{ color: '#EFEFEF', fontSize: '12px' }}>Kod Çıktısı:</span>
            </div>
            <div
              className="rounded p-2.5 text-xs"
              style={{
                backgroundColor: '#1E2628',
                color: '#EFEFEF',
                fontFamily: 'monospace',
                overflowX: 'auto',
              }}
            >
              {generateCode()}
            </div>
          </div>

          {/* Footer Panel */}
          <div className="flex items-center justify-between">
            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={clearGrid}
                className="px-4 py-2 rounded transition-none hover:opacity-90 flex items-center gap-1.5 text-sm"
                style={{
                  backgroundColor: '#F47E52',
                  color: '#EFEFEF',
                }}
              >
                Clear
              </Button>
              <Button
                onClick={copyCode}
                className="px-4 py-2 rounded transition-none hover:opacity-90 flex items-center gap-1.5 text-sm"
                style={{
                  backgroundColor: '#F47E52',
                  color: '#EFEFEF',
                }}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Saved' : 'Save'}
              </Button>
            </div>

            {/* GitHub Link */}
            <div className="flex items-center gap-1.5" style={{ color: '#EFEFEF' }}>
              <span className="text-xs opacity-60">produced by</span>
              <a
                href="https://github.com/arif7esat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:opacity-80 transition-opacity underline"
                style={{ color: '#F47E52' }}
              >
                arif7esat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
