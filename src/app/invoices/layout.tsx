export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:px-20 text-primary">{children}</div>
  );
}