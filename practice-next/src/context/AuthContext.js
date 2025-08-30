'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simple hardcoded authentication
    if (email === 'admin@admin.com' && password === 'admin123') {
      const adminUser = { email, role: 'admin', name: 'Admin' };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      // Set cookie for middleware
      document.cookie = `user=${JSON.stringify(adminUser)}; path=/; max-age=86400`;
      return { success: true };
    } else if (email === 'user@user.com' && password === 'user123') {
      const regularUser = { email, role: 'user', name: 'User' };
      setUser(regularUser);
      localStorage.setItem('user', JSON.stringify(regularUser));
      // Set cookie for middleware
      document.cookie = `user=${JSON.stringify(regularUser)}; path=/; max-age=86400`;
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Remove cookie
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  };

  const isAdmin = () => user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};