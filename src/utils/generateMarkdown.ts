import { Section } from '../types';

export const generateMarkdown = (sections: Section[]) => {
  return sections
    .map((section) => {
      let content = section.content;
      
      // Apply text styling
      if (section.style) {
        if (section.style.bold) content = `**${content}**`;
        if (section.style.italic) content = `*${content}*`;
        if (section.style.align === 'center') content = `<div align="center">\n\n${content}\n\n</div>`;
        if (section.style.align === 'right') content = `<div align="right">\n\n${content}\n\n</div>`;
        if (section.style.color) {
          content = `<span style="color: ${section.style.color}">${content}</span>`;
        }
      }

      switch (section.type) {
        case 'heading':
          return `${'#'.repeat(section.level || 1)} ${content}`;
        
        case 'text':
          return content;
        
        case 'code':
          return `\`\`\`${section.language || ''}\n${content}\n\`\`\``;
        
        case 'image':
          return `![](${content})`;
        
        case 'embed':
          return `<div class="embed-container">\n${content}\n</div>`;
        
        case 'skills':
          if (!section.skills?.length) return '';
          return section.skills
            .map(skill => `- ![${skill.name}](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg) ${skill.name} ${
              '●'.repeat(skill.level || 5)
            }`)
            .join('\n');
        
        case 'attachment':
          if (!section.attachment) return '';
          return `📎 [${section.attachment.name}](${section.attachment.url})`;
        
        default:
          return '';
      }
    })
    .join('\n\n');
};