#!/bin/bash

# Server details
SERVER_IP="43.143.47.221"
USER="root"
REMOTE_DIR="/var/www/bunnywords"
PASSWORD="GFXfly150602"

echo "Deploying to $SERVER_IP..."

# Function to run SSH command
run_ssh() {
    if ssh -o BatchMode=yes -o ConnectTimeout=5 $USER@$SERVER_IP "echo check" >/dev/null 2>&1; then
        ssh $USER@$SERVER_IP "$1"
    elif command -v sshpass >/dev/null 2>&1; then
        sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no $USER@$SERVER_IP "$1"
    else
        echo "Error: Cannot connect via SSH key and sshpass is not installed."
        exit 1
    fi
}

# Function to run SCP command
run_scp() {
    if ssh -o BatchMode=yes -o ConnectTimeout=5 $USER@$SERVER_IP "echo check" >/dev/null 2>&1; then
        scp $1 $USER@$SERVER_IP:$2
    elif command -v sshpass >/dev/null 2>&1; then
        sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no $1 $USER@$SERVER_IP:$2
    else
        echo "Error: Cannot connect via SSH key and sshpass is not installed."
        exit 1
    fi
}

# Function to run Rsync command
run_rsync() {
    if ssh -o BatchMode=yes -o ConnectTimeout=5 $USER@$SERVER_IP "echo check" >/dev/null 2>&1; then
        rsync -avz --delete \
          --exclude 'node_modules' \
          --exclude '.git' \
          --exclude '.next' \
          --exclude '.DS_Store' \
          ./ $USER@$SERVER_IP:$REMOTE_DIR
    elif command -v sshpass >/dev/null 2>&1; then
        sshpass -p "$PASSWORD" rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" \
          --exclude 'node_modules' \
          --exclude '.git' \
          --exclude '.next' \
          --exclude '.DS_Store' \
          ./ $USER@$SERVER_IP:$REMOTE_DIR
    else
        echo "Error: Cannot connect via SSH key and sshpass is not installed."
        exit 1
    fi
}

# Create remote directory
echo "Creating remote directory..."
run_ssh "mkdir -p $REMOTE_DIR"

# Sync files
echo "Syncing files..."
run_rsync

# Upload Nginx config
echo "Uploading Nginx config..."
run_scp ./bunnywords.nginx.conf /etc/nginx/conf.d/bunnywords.conf

# Deploy with Docker
echo "Building and starting Docker container..."
run_ssh "cd $REMOTE_DIR && \
  docker-compose down && \
  docker-compose up -d --build && \
  docker image prune -f"

# Reload Nginx
echo "Reloading Nginx..."
run_ssh "nginx -t && systemctl reload nginx"

echo "Deployment complete! Your site should be live at http://www.bunnywords.com"
