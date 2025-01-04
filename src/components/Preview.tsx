// Update the markdown generation in Preview.tsx to include styling
const markdown = sections
  .map((section) => {
    let content = section.content;
    
    // Apply text styling if available
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
      default:
        return '';
    }
  })
  .join('\n\n');