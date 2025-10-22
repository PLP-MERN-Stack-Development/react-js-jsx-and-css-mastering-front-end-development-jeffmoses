import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white border-t shadow-sm p-4 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-8 mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">React Task Manager</h3>
                <p className="text-gray-400">
                  React Task Management App.
                </p>
              </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <p>&copy; 2025 Task Manager. All rights reserved.</p>
          </div>
        </footer>
    );
}
