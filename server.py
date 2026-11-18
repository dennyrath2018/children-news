#!/usr/bin/env python3
"""
Simple HTTP server for WonderSparks Kids News Portal
"""
import http.server
import socketserver
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable caching-free local development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"✨ WonderSparks Kids News Portal running at http://localhost:{PORT}")
            print("🚀 Press Ctrl+C to stop.")
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 48: # Address already in use
            # Try port 8081
            alt_port = 8081
            with socketserver.TCPServer(("", alt_port), Handler) as httpd:
                print(f"✨ WonderSparks Kids News Portal running at http://localhost:{alt_port}")
                print("🚀 Press Ctrl+C to stop.")
                httpd.serve_forever()
        else:
            raise e

if __name__ == '__main__':
    run()
