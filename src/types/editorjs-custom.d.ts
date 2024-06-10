declare module '@editorjs/table' {
    import { BlockTool, BlockToolData } from '@editorjs/editorjs';
  
    interface TableConfig {
      rows: number;
      cols: number;
    }
  
    export default class Table implements BlockTool {
      constructor(config: { data: BlockToolData, config: TableConfig, api: any, readOnly: boolean });
      render(): HTMLElement;
      save(block: HTMLElement): BlockToolData;
      validate(savedData: BlockToolData): boolean;
      static get toolbox(): { title: string, icon: string };
    }
  }
  declare module '@editorjs/list' {
    import { BlockTool, BlockToolData } from '@editorjs/editorjs';
  
    interface ListConfig {
      ordered?: boolean;
    }
  
    export default class List implements BlockTool {
      constructor(config: { data: BlockToolData, config: ListConfig, api: any, readOnly: boolean });
      render(): HTMLElement;
      save(block: HTMLElement): BlockToolData;
      validate(savedData: BlockToolData): boolean;
      static get toolbox(): { title: string, icon: string };
    }
  }
  declare module '@editorjs/quote' {
    import { BlockTool, BlockToolData } from '@editorjs/editorjs';
  
    interface QuoteConfig {
      quotePlaceholder?: string;
      captionPlaceholder?: string;
    }
  
    export default class Quote implements BlockTool {
      constructor(config: { data: BlockToolData, config: QuoteConfig, api: any, readOnly: boolean });
      render(): HTMLElement;
      save(block: HTMLElement): BlockToolData;
      validate(savedData: BlockToolData): boolean;
      static get toolbox(): { title: string, icon: string };
    }
  }
  declare module '@editorjs/image' {
    import { BlockTool, BlockToolData } from '@editorjs/editorjs';
  
    interface ImageConfig {
      endpoints: {
        byFile: string; // Your backend file uploader endpoint
        byUrl: string; // Your endpoint that provides uploading by URL
      };
    }
  
    export default class ImageTool implements BlockTool {
      constructor(config: { data: BlockToolData, config: ImageConfig, api: any, readOnly: boolean });
      render(): HTMLElement;
      save(block: HTMLElement): BlockToolData;
      validate(savedData: BlockToolData): boolean;
      static get toolbox(): { title: string, icon: string };
    }
  }
  declare module '@editorjs/delimiter' {
    import { BlockTool, BlockToolData } from '@editorjs/editorjs';
  
    interface delimiterConfig {
      endpoints: {
        byFile: string; // Your backend file uploader endpoint
        byUrl: string; // Your endpoint that provides uploading by URL
      };
    }
  
    export default class delimiterTool implements BlockTool {
      constructor(config: { data: BlockToolData, config: delimiterConfig, api: any, readOnly: boolean });
      render(): HTMLElement;
      save(block: HTMLElement): BlockToolData;
      validate(savedData: BlockToolData): boolean;
      static get toolbox(): { title: string, icon: string };
    }
  }
  
  declare module '@editorjs/paragraph' {
    import { BlockTool, BlockToolData } from '@editorjs/editorjs';
  
    interface ParagraphConfig {
      endpoints: {
        byFile: string; // Your backend file uploader endpoint
        byUrl: string; // Your endpoint that provides uploading by URL
      };
    }
  
    export default class ParagraphTool implements BlockTool {
      constructor(config: { data: BlockToolData, config: ParagraphConfig, api: any, readOnly: boolean });
      render(): HTMLElement;
      save(block: HTMLElement): BlockToolData;
      validate(savedData: BlockToolData): boolean;
      static get toolbox(): { title: string, icon: string };
    }
  }
  declare module '@editorjs/marker' {
    import { BlockTool, BlockToolData } from '@editorjs/editorjs';
  
    interface MarkerConfig {
      endpoints: {
        byFile: string; // Your backend file uploader endpoint
        byUrl: string; // Your endpoint that provides uploading by URL
      };
    }
  
    export default class MarkerTool implements BlockTool {
      constructor(config: { data: BlockToolData, config: MarkerConfig, api: any, readOnly: boolean });
      render(): HTMLElement;
      save(block: HTMLElement): BlockToolData;
      validate(savedData: BlockToolData): boolean;
      static get toolbox(): { title: string, icon: string };
    }
  }
  