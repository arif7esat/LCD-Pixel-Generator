import { useState } from 'react';
import { Github, Copy, Check } from 'lucide-react';
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
    <div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#242F32' }}>
      <Toaster />
      
      <div className="w-full max-w-2xl">
        {/* Title */}
        <h1 className="text-center mb-8" style={{ color: '#EFEFEF' }}>
          LCD Piksel Oluşturucu
        </h1>

        {/* Main Content Card */}
        <div 
          className="rounded-lg p-8 shadow-2xl"
          style={{ backgroundColor: '#2A3639' }}
        >
          {/* Register Selection */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span style={{ color: '#EFEFEF' }}>Register:</span>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((register) => (
                <button
                  key={register}
                  onClick={() => setSelectedRegister(register)}
                  className="w-10 h-10 rounded-md transition-all duration-200 flex items-center justify-center"
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
          <div className="flex gap-4 mb-6">
            {/* Left Row Values (Decimal) */}
            <div className="flex flex-col gap-3" style={{ paddingTop: '44px' }}>
              {grid.map((_, rowIdx) => (
                <div
                  key={rowIdx}
                  className="w-14 h-12 flex items-center justify-center"
                  style={{ color: '#EFEFEF', fontFamily: 'monospace' }}
                >
                  {calculateRowValue(rowIdx)}
                </div>
              ))}
            </div>

            {/* Right Side: Column Values + Pixel Grid */}
            <div className="flex flex-col">
              {/* Column Values */}
              <div className="flex gap-3 mb-3">
                {columnValues.map((value, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-8 flex items-center justify-center"
                    style={{ color: '#EFEFEF' }}
                  >
                    {value}
                  </div>
                ))}
              </div>

              {/* Pixel Grid */}
              <div className="flex flex-col gap-3">
                {grid.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-3">
                    {row.map((isActive, colIdx) => (
                      <button
                        key={colIdx}
                        onClick={() => togglePixel(rowIdx, colIdx)}
                        className="w-12 h-12 rounded-md transition-all duration-200 hover:ring-2"
                        style={{
                          backgroundColor: isActive ? '#F47E52' : '#3A4A4D',
                          borderColor: '#F47E52',
                          boxShadow: isActive ? '0 0 10px rgba(244, 126, 82, 0.3)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Output Area */}
          <div className="mb-6">
            <div className="mb-2">
              <span style={{ color: '#EFEFEF', fontSize: '14px' }}>Kod Çıktısı:</span>
            </div>
            <div
              className="rounded-md p-4"
              style={{
                backgroundColor: '#1E2628',
                color: '#EFEFEF',
                fontFamily: 'monospace',
                fontSize: '14px',
                overflowX: 'auto',
              }}
            >
              {generateCode()}
            </div>
          </div>

          {/* Footer Panel */}
          <div className="flex items-center justify-between">
            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={clearGrid}
                className="px-6 py-5 rounded-md transition-all duration-200 hover:opacity-90 flex items-center gap-2"
                style={{
                  backgroundColor: '#F47E52',
                  color: '#EFEFEF',
                }}
              >
                Temizle
              </Button>
              <Button
                onClick={copyCode}
                className="px-6 py-5 rounded-md transition-all duration-200 hover:opacity-90 flex items-center gap-2"
                style={{
                  backgroundColor: '#F47E52',
                  color: '#EFEFEF',
                }}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Kopyalandı!' : 'Kopyala'}
              </Button>
            </div>

            {/* GitHub Link */}
            <div className="flex items-center gap-2" style={{ color: '#EFEFEF' }}>
              <span className="text-sm opacity-70">Made by</span>
              <Github className="w-4 h-4 opacity-70" />
              <a
                href="https://github.com/arif7esat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-80 transition-opacity"
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
