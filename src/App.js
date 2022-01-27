import { Route, Routes } from 'react-router';
import { useGlobalContext } from './context';
import { useState, useEffect } from 'react';
import useStickyState from './utils/useStickyState';
import Header from './components/Header/Header';
import Wrapper from "./components/Wrapper/Wrapper";
import Invoices from "./components/Invoices/Invoices";
import InvoiceSelect from "./components/InvoiceSelect/InvoiceSelect";
import FormController from "./components/FormController/FormController";
import Modal from "./components/Modal/Modal";

function App() {
  const [theme, setTheme] = useStickyState('dark', 'theme');
  const { state } = useGlobalContext();
  const isFormOpen = state.isFormOpen;
  const isModalOpen = state.isModalOpen.status;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  return (
    <Wrapper>
      {isModalOpen && <Modal />}
      <Header />
      {isFormOpen && <FormController />}
      <Routes>
        <Route exact path='/' element={<Invoices />} />
        <Route path='/invoice/:id' element={<InvoiceSelect />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
