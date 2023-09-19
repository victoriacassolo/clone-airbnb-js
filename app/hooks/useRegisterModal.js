import { create } from "zustand";

const useRegisterModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;

// const useStore = create((set) => ({
//   count: 0, // O estado inicial
//   increment: () => set((state) => ({ count: state.count + 1 })), // Função para incrementar o contador
//   decrement: () => set((state) => ({ count: state.count - 1 })), // Função para decrementar o contador
// }));
