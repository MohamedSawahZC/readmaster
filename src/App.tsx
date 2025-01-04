import React, { useState } from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Toolbar } from './components/Toolbar/Toolbar';
import { DraggableSection } from './components/Section/DraggableSection';
import { Preview } from './components/Preview/Preview';
import { TemplateSelector } from './components/Templates/TemplateSelector';
import { Section } from './types';
import { generateId } from './utils/generateId';
import { downloadMarkdown } from './utils/downloadMarkdown';
import { generateMarkdown } from './utils/generateMarkdown';

export function App() {
  const [sections, setSections] = useState<Section[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const addSection = (type: Section['type'], level?: number) => {
    setSections([
      ...sections,
      { id: generateId(), type, content: '', level }
    ]);
  };

  const updateSection = (id: string, content: string, style?: Section['style']) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? { ...section, content, style: style !== undefined ? style : section.style }
          : section
      )
    );
  };

  const deleteSection = (id: string) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      const newSections = [...sections];
      const [removed] = newSections.splice(oldIndex, 1);
      newSections.splice(newIndex, 0, removed);
      setSections(newSections);
    }
  };

  const handleDownload = () => {
    const markdown = generateMarkdown(sections);
    downloadMarkdown(markdown);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <Header
        showPreview={showPreview}
        onTogglePreview={() => setShowPreview(!showPreview)}
        onDownload={handleDownload}
      />

      <main className="flex flex-1 gap-4 p-4">
        <div className={`flex flex-1 flex-col gap-4 ${showPreview ? 'w-1/2' : 'w-full'}`}>
          <TemplateSelector onApply={setSections} />
          <Toolbar onAdd={addSection} />
          
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={sections} strategy={verticalListSortingStrategy}>
              <div className="flex flex-col gap-4">
                {sections.map((section) => (
                  <DraggableSection
                    key={section.id}
                    section={section}
                    onUpdate={updateSection}
                    onDelete={deleteSection}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        {showPreview && (
          <div className="w-1/2">
            <Preview sections={sections} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;