export interface Section {
  id: string;
  type: 'heading' | 'text' | 'code' | 'image' | 'embed' | 'skills' | 'attachment';
  content: string;
  level?: 1 | 2 | 3;
  language?: string;
  embedType?: 'spotify' | 'youtube' | 'linkedin' | 'facebook';
  skills?: Array<{
    name: string;
    icon: string;
    level?: number;
  }>;
  style?: {
    align?: 'left' | 'center' | 'right';
    bold?: boolean;
    italic?: boolean;
    color?: string;
    fontSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  };
  attachment?: {
    name: string;
    size: number;
    type: string;
    url: string;
  };
}