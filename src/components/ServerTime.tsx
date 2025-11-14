import { useState, useEffect } from 'react';

const ServerTime = () => {
  const [serverTime, setServerTime] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const fetchServerTime = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/time');
      if (!response.ok) {
        throw new Error('Failed to fetch server time');
      }
      const data = await response.json();
      setServerTime(data.time);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServerTime();
  }, []);

  const formatTime = (isoString: string) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Server Time
          </h1>
          <p className="text-xl text-gray-600">
            Current time from the Cloudflare Worker
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Fetching server time...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-medium">Error: {error}</p>
              <button
                onClick={fetchServerTime}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && serverTime && (
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-6">
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {formatTime(serverTime)}
                </p>
                <p className="text-sm text-gray-500 font-mono">{serverTime}</p>
              </div>
              
              <button
                onClick={fetchServerTime}
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Refresh Time
              </button>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg text-left">
                <h3 className="font-semibold text-gray-900 mb-3">About this demo:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>This time is fetched from a Cloudflare Worker API endpoint</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>The Worker runs at the edge, close to your location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>API endpoint: <code className="bg-white px-2 py-1 rounded text-sm">/api/time</code></span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServerTime;
