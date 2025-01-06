export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preOrder: boolean;
  service: string;
  message: string;
}

export interface ConsultationFormProps {
  onClose: () => void;
}