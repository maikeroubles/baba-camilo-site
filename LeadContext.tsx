import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LeadContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <LeadContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLeadForm = () => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLeadForm must be used within a LeadFormProvider');
  }
  return context;
};