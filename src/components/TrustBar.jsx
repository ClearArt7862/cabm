import { FileText, Building2, BadgeCheck, Clock } from 'lucide-react'

const items = [
  { icon: FileText,   label: 'Licence No.',   value: 'CN-4534360' },
  { icon: Building2,  label: 'ADCCI Member',  value: '8800027270' },
  { icon: BadgeCheck, label: 'MOHRE Card',    value: '1453612' },
  { icon: Clock,      label: 'Valid Through', value: 'Oct 2027' },
]

export default function TrustBar() {
  return (
    <div className="bg-ink py-5">
      <div className="container-custom flex flex-wrap justify-center items-center gap-10 md:gap-16">
        {items.map(({ icon: Icon, label, value }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brown flex items-center justify-center flex-shrink-0">
              <Icon size={18} className="text-white" strokeWidth={1.8} />
            </div>
            <div className="leading-tight">
              <p className="text-white/60 text-xs uppercase tracking-widest font-medium mb-0.5">{label}</p>
              <p className="text-white text-base font-bold">{value}</p>
            </div>
            {i < items.length - 1 && (
              <span className="hidden md:block ml-10 md:ml-14 w-px h-8 bg-white/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}