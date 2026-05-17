export interface ModalButtonType {
  type: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  label: string;
  onClick: () => void;
}