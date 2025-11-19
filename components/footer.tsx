export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-white to-gray-50 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
          <div className="hover:text-foreground transition-colors">ICP备案号：京ICP备XXXXXXXX号</div>
          <div className="hover:text-foreground transition-colors">公安备案号：京公网安备 XXXXXXXXXXXX号</div>
        </div>
      </div>
    </footer>
  )
}
