# Deployment Guide — Explore Ella

This guide covers deploying the Explore Ella static website to a Linux web server using Apache or Nginx.

---

## Prerequisites

- A registered domain name (e.g., `YOUR_DOMAIN.com`)
- A Linux server (Ubuntu 20.04+ / Debian 11+ recommended) with a public IP address
- SSH access to the server
- Basic terminal/command line knowledge

## 1. Server Setup

### Update the server

```bash
sudo apt update && sudo apt upgrade -y
```

### Install a web server

**Option A: Apache**
```bash
sudo apt install apache2 -y
sudo systemctl enable apache2
sudo systemctl start apache2
```

**Option B: Nginx**
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Install a firewall (if not already configured)

```bash
sudo ufw allow 'Apache Full'   # For Apache
# or
sudo ufw allow 'Nginx Full'    # For Nginx
sudo ufw allow ssh
sudo ufw enable
```

## 2. Create Document Root

```bash
sudo mkdir -p /var/www/YOUR_DOMAIN.com/public_html
sudo chown -R $USER:$USER /var/www/YOUR_DOMAIN.com/public_html
sudo chmod -R 755 /var/www/YOUR_DOMAIN.com
```

## 3. Upload Website Files

Upload the contents of the `explore-ella/` directory to the document root. Use SCP, SFTP, or rsync.

**Using SCP:**
```bash
scp -r explore-ella/* user@YOUR_SERVER_IP:/var/www/YOUR_DOMAIN.com/public_html/
```

**Using rsync:**
```bash
rsync -avz --progress explore-ella/ user@YOUR_SERVER_IP:/var/www/YOUR_DOMAIN.com/public_html/
```

Ensure the following structure exists on the server:

```text
/var/www/YOUR_DOMAIN.com/public_html/
├── index.html
├── about.html
├── attractions.html
├── activities.html
├── gallery.html
├── contact.html
├── css/
├── js/
├── images/
├── assets/
├── robots.txt
└── sitemap.xml
```

**Note:** Do not upload the `docs/`, `deploy/`, or `README.md` files to the production server. These are development/documentation files only.

## 4. Configure Virtual Host

### Apache

```bash
sudo cp deploy/apache-vhost.conf /etc/apache2/sites-available/YOUR_DOMAIN.com.conf
```

Edit the file to replace all `YOUR_DOMAIN.com` placeholders:
```bash
sudo nano /etc/apache2/sites-available/YOUR_DOMAIN.com.conf
```

Enable the site and required modules:
```bash
sudo a2ensite YOUR_DOMAIN.com.conf
sudo a2enmod rewrite headers
sudo a2dissite 000-default.conf
sudo systemctl reload apache2
```

### Nginx

```bash
sudo cp deploy/nginx-server-block.conf /etc/nginx/sites-available/YOUR_DOMAIN.com
```

Edit the file:
```bash
sudo nano /etc/nginx/sites-available/YOUR_DOMAIN.com
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/YOUR_DOMAIN.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 5. Configure DNS

Log in to your domain registrar's DNS management panel and add:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | YOUR_SERVER_IP | 3600 |
| A | www | YOUR_SERVER_IP | 3600 |

DNS propagation can take up to 24–48 hours but usually completes within a few hours.

**Verification:**
```bash
nslookup YOUR_DOMAIN.com
dig YOUR_DOMAIN.com A
ping YOUR_DOMAIN.com
```

## 6. Enable HTTPS with Let's Encrypt

### For Apache

```bash
sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com
```

### For Nginx

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com
```

### Auto-renewal

Certbot sets up automatic renewal by default. To test:

```bash
sudo certbot renew --dry-run
```

### After SSL is enabled

1. Uncomment the HTTPS virtual host block in your configuration file
2. Enable HTTP-to-HTTPS redirect
3. Reload the web server

## 7. Verification

After deployment, verify:

1. **HTTP access:** `http://YOUR_DOMAIN.com` → should redirect to HTTPS
2. **HTTPS access:** `https://YOUR_DOMAIN.com` → should display the home page
3. **www redirect:** `https://www.YOUR_DOMAIN.com` → should work
4. **All pages:** Check all 6 pages load correctly
5. **Images:** Verify all images display properly
6. **Mobile:** Test responsive layout on a mobile device
7. **SSL:** Check certificate validity at `https://www.ssllabs.com/ssltest/`

## 8. File Permissions

Ensure correct permissions for security:

```bash
sudo find /var/www/YOUR_DOMAIN.com/public_html -type d -exec chmod 755 {} \;
sudo find /var/www/YOUR_DOMAIN.com/public_html -type f -exec chmod 644 {} \;
```

## 9. Troubleshooting

| Issue | Solution |
|-------|----------|
| Site not loading | Check web server status: `sudo systemctl status apache2` or `nginx` |
| 403 Forbidden | Check file permissions and document root path |
| 404 Not Found | Verify virtual host configuration and document root |
| DNS not resolving | Wait for propagation; verify A records |
| SSL errors | Run `sudo certbot --apache` or `--nginx` again |
| Images not loading | Check file paths are relative and case-sensitive on Linux |

## 10. Quick Hosting Option: GitHub Pages (Recommended for Demonstrations)

GitHub Pages provides free static website hosting with automatic HTTPS.

### Steps:
1. **Initialize Git & Commit** (Already completed):
   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit: Explore Ella tourism website"
   ```
2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `explore-ella`
   - Set visibility to **Public**
   - Leave "Initialize with README" unchecked
3. **Connect remote & push**:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/explore-ella.git
   git push -u origin main
   ```
4. **Enable Pages**:
   - Go to repository **Settings** → **Pages** (sidebar)
   - Under **Build and deployment** → Source: **Deploy from a branch**
   - Branch: `main` / Folder: `/(root)`
   - Click **Save**
5. **Live URL**:
   Your site will be live at `https://<YOUR_USERNAME>.github.io/explore-ella/` within 1–2 minutes.

---

**Status:** Ready for GitHub Pages and Linux production deployment.
