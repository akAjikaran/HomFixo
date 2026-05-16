type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "h-6 w-6" }: WhatsAppIconProps) {
  return (
    <img
      src="/images/whatsapp-icon.png"
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}
