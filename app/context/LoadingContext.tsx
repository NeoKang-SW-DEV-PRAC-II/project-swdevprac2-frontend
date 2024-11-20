'use client'
import React, { createContext, useContext, useState } from 'react';

interface LoadingContextProps {
  loading: boolean;
  setLoading: (value: boolean) => void;
  companyInfoLoading: boolean;
  setCompanyInfoLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [companyInfoLoading, setCompanyInfoLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading, companyInfoLoading, setCompanyInfoLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};