# TreesSocialMedia 🌳

A comprehensive social media platform built with React, TypeScript, and Vite, featuring real-time chat, posts, stories, arcade games, live streaming, and subscription management.

## 🚀 Features

- **User Authentication** - Secure signup/login with OTP verification
- **Social Feed** - Create, like, comment on posts with image/video support
- **Stories** - Share temporary content with your followers
- **Real-time Chat** - Messaging system with Socket.IO
- **Matchmaking** - Swipe-based user matching system
- **Arcade Games** - Interactive games for user engagement
- **Live Streaming** - Stream and watch live content
- **Subscriptions** - Streamer subscription management
- **Admin Panel** - Comprehensive admin controls and analytics
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: Radix UI + Tailwind CSS
- **State Management**: React Query, Context API
- **Real-time**: Socket.IO Client
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/techsavvyanuj/treessocialmedia.git
cd treessocialmedia
```

2. **Install dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

4. **Set up environment variables**
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

## 🏃‍♂️ Development

1. **Start the backend server**
```bash
npm run backend:dev
```

2. **Start the frontend development server**
```bash
npm run dev
```

3. **Open your browser**
Navigate to `http://localhost:8080`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run backend:dev` - Start backend development server
- `npm run backend:install` - Install backend dependencies

## 🌍 Deployment

### Vercel (Frontend)
The frontend is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. Set environment variables in Vercel dashboard
4. Deploy!

### Backend Deployment
The backend can be deployed to:
- Railway
- Heroku
- DigitalOcean
- AWS EC2

Make sure to:
1. Set up MongoDB database
2. Configure environment variables
3. Set up Cloudinary for file uploads

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom hooks
│   ├── contexts/      # React contexts
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   └── lib/           # Libraries and configurations
├── backend/           # Node.js backend
├── public/           # Static assets
└── vercel.json      # Vercel deployment config
```

## 🔑 Environment Variables

```env
# Frontend
VITE_API_BASE_URL=your_backend_url
VITE_APP_NAME="TreesWeb Social"
VITE_SOCKET_URL=your_backend_url
VITE_FRONTEND_URL=your_frontend_url

# Feature Flags
VITE_ENABLE_LIVESTREAMING=true
VITE_ENABLE_ARCADE=true
VITE_ENABLE_SUBSCRIPTIONS=true
VITE_ENABLE_ADMIN_PANEL=true
```

## 📱 Mobile Responsive

The application is fully responsive and works seamlessly across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anuj Mishra** - [@techsavvyanuj](https://github.com/techsavvyanuj)

## 🙏 Acknowledgments

- React & Vite teams for the amazing tools
- Radix UI for the accessible components
- Tailwind CSS for the utility-first CSS framework
- All contributors and testers

---

⭐ Star this repository if you find it helpful!
