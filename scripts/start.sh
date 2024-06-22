#!/bin/bash

# Build the React application
(cd app && npm run build)

# Function to handle cleanup
cleanup() {
    echo "Cleaning up..."
    kill $JEKYLL_PID
    exit 0
}

# Trap SIGINT (Ctrl+C) and SIGTERM to perform cleanup
trap cleanup SIGINT SIGTERM

# Start the Jekyll server
(cd jekyll && bundle exec jekyll serve --livereload) &
JEKYLL_PID=$!

# Start the React development server
(cd app && npm start) &

# Wait for React server to exit
wait
cleanup
