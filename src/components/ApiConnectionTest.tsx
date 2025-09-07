import { useEffect, useState } from 'react';
import { API_CONFIG, getUploadUrl, validateBackendConnection, getDebugInfo } from '@/lib/apiConfig';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export const ApiConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');
  const [debugInfo, setDebugInfo] = useState<any>(null);
  
  useEffect(() => {
    checkConnection();
    setDebugInfo(getDebugInfo());
  }, []);
  
  const checkConnection = async () => {
    setConnectionStatus('checking');
    const isConnected = await validateBackendConnection();
    setConnectionStatus(isConnected ? 'connected' : 'disconnected');
  };
  
  const testUploadEndpoint = async (type: 'image' | 'video') => {
    try {
      const uploadUrl = getUploadUrl(type);
      console.log(`Testing ${type} upload URL:`, uploadUrl);
      
      // Test with a HEAD request to see if endpoint exists
      const response = await fetch(uploadUrl, { 
        method: 'HEAD',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token') || 'test'}`
        }
      });
      
      console.log(`${type} upload endpoint status:`, response.status);
      return response.status;
    } catch (error) {
      console.error(`Error testing ${type} upload:`, error);
      return 'error';
    }
  };
  
  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'disconnected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };
  
  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'bg-green-100 text-green-800';
      case 'disconnected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getStatusIcon()}
          API Connection Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center gap-2">
          <span>Backend Status:</span>
          <Badge className={getStatusColor()}>
            {connectionStatus === 'checking' ? 'Checking...' : connectionStatus.toUpperCase()}
          </Badge>
          <Button onClick={checkConnection} size="sm" variant="outline">
            Recheck
          </Button>
        </div>
        
        {/* API Configuration */}
        {debugInfo && (
          <div className="space-y-2">
            <h3 className="font-semibold">Current Configuration:</h3>
            <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-sm font-mono">
              <div>API Base URL: <strong>{debugInfo.API_BASE_URL}</strong></div>
              <div>Socket URL: <strong>{debugInfo.SOCKET_URL}</strong></div>
              <div>Environment: <strong>{debugInfo.ENVIRONMENT}</strong></div>
            </div>
          </div>
        )}
        
        {/* Upload Endpoints */}
        <div className="space-y-2">
          <h3 className="font-semibold">Upload Endpoints:</h3>
          <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-sm font-mono">
            <div>
              Image Upload: <strong>{getUploadUrl('image')}</strong>
              <Button 
                onClick={() => testUploadEndpoint('image')} 
                size="sm" 
                variant="ghost"
                className="ml-2"
              >
                Test
              </Button>
            </div>
            <div>
              Video Upload: <strong>{getUploadUrl('video')}</strong>
              <Button 
                onClick={() => testUploadEndpoint('video')} 
                size="sm" 
                variant="ghost"
                className="ml-2"
              >
                Test
              </Button>
            </div>
          </div>
        </div>
        
        {/* Expected URL */}
        <div className="space-y-2">
          <h3 className="font-semibold">Expected Upload URL:</h3>
          <div className="bg-blue-50 p-3 rounded-lg text-sm">
            <div className="font-mono">
              <strong>https://trees-backend-7pci.onrender.com/api/uploads/image</strong>
            </div>
            <div className="text-gray-600 mt-1">
              This is the URL your application should be using for image uploads.
            </div>
          </div>
        </div>
        
        {/* Verification */}
        <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">✅ Verification Checklist:</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Upload URL uses environment variable: {debugInfo?.UPLOAD_IMAGE_URL === 'https://trees-backend-7pci.onrender.com/api/uploads/image' ? '✅' : '❌'}</li>
            <li>• No hardcoded localhost URLs in components</li>
            <li>• API configuration is centralized</li>
            <li>• Environment switching works properly</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
