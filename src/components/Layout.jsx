import React from 'react';
import { Outlet } from 'react-router-dom';
import { Zap, Shield, Lock, Clock } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
      
      {/* Footer */}
      <footer className="mt-auto py-4 border-t border-slate-200 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-slate-600 text-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap size={16} className="text-blue-600" />
            <span>Powered by AI</span>
            <span>•</span>
            <span>Built with React & Python</span>
            <Zap size={16} className="text-blue-600" />
          </div>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Shield size={12} />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock size={12} />
              <span>Private</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>Fast Analysis</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
