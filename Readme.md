# Password Reset - Backend

## Overview
This is the backend service for a password reset functionality built with Node.js and Express.

## Features
- User authentication
- Secure password reset flow
- Email verification
- Token-based reset links

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB or your preferred database
- SMTP service for email notifications

## Installation

```bash
npm install
```

## Environment Variables
Create a `.env` file in the root directory:

```
PORT=5000
DB_URI=your_database_uri
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
RESET_TOKEN_EXPIRY=3600
```

## Usage

```bash
npm start
```

## API Endpoints
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `GET /api/auth/verify-token` - Verify reset token


## License
MIT

## Links
- **API Documentation**: [API Docs](https://documenter.getpostman.com/view/50347515/2sBXVZntv2)
- **GitHub Repository**: [GitHub](https://github.com/santhoshkumark2003/Backend)