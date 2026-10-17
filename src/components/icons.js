import {
  GraduationCap,
  Code2,
  Palette,
  BookOpen,
  Wind,
  LayoutGrid,
  Paintbrush,
  Braces,
  Figma,
  Framer,
  Shapes,
  Image as ImageIcon,
  PenTool,
  Network,
  BrainCircuit,
  Languages,
  School,
  Code,
} from 'lucide-react'

export const iconMap = {
  graduation: GraduationCap,
  code: Code2,
  palette: Palette,
  book: BookOpen,
  wind: Wind,
  layout: LayoutGrid,
  paintbrush: Paintbrush,
  braces: Braces,
  figma: Figma,
  framer: Framer,
  shapes: Shapes,
  image: ImageIcon,
  pen: PenTool,
  network: Network,
  brain: BrainCircuit,
  languages: Languages,
  school: School,
  html: Code,
}

export function getIcon(name) {
  return iconMap[name] || Code2
}
