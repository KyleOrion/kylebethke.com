'use client';

import { Box, Stack, IconButton, Typography } from '@mui/joy';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// Start simple - just Home for now!
// We'll add more pages as you build them:
// - About page
// - Projects page
// - Blog page
// - Contact page

const routes = [
  { path: '/', label: 'Home', icon: HomeRoundedIcon },
  { path: '/about', label: 'About', icon: PersonRoundedIcon },
  // Uncomment these as you build the pages:
  // { path: '/projects', label: 'Projects', icon: FolderOpenIcon },
  // { path: '/blog', label: 'Blog', icon: ArticleRoundedIcon },
  // { path: '/contact', label: 'Contact', icon: ContactMailIcon },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        bgcolor: 'background.surface',
        borderBottom: '1px solid',
        borderColor: 'divider',
        p: 2,
        backdropFilter: 'blur(8px)',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {/* Logo/Name */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography
            level="h4"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            KB
          </Typography>
        </Link>

        {/* Navigation Icons */}
        <Stack direction="row" spacing={1}>
          {routes.map(({ path, label, icon: Icon }) => {
            const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
            return (
              <IconButton
                key={path}
                component={Link}
                href={path}
                variant={isActive ? 'soft' : 'plain'}
                color={isActive ? 'primary' : 'neutral'}
                title={label}
                sx={{
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Icon />
              </IconButton>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
