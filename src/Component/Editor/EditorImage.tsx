
import ImageTool from "@editorjs/image";




export class ResizableImageTool extends ImageTool {
    wrapper: HTMLElement | undefined;
    data: any
    constructor({ data, config, api, readOnly }: { data: any, config: any, api: any, readOnly: boolean }) {
      super({ data, config, api, readOnly }); // Call super constructor with data, config, api, and readOnly
      this.wrapper = undefined;
    }
  
    render() {
      this.wrapper = super.render();
  
      this.addResizeHandles();
  
      return this.wrapper;
    }
  
    addResizeHandles() {
      const resizeHandle = document.createElement('div');
      resizeHandle.className = 'resize-handle';
      this.wrapper?.appendChild(resizeHandle);
  
      let isResizing = false;
      let startY = 0;
      let startHeight = 0;
  
      resizeHandle.addEventListener('mousedown', (event) => {
        isResizing = true;
        startY = event.clientY;
        startHeight = this.wrapper?.offsetHeight || 0;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
      });
  
      const resize = (event: MouseEvent) => {
        if (isResizing && this.wrapper) {
          const newHeight = startHeight + (event.clientY - startY);
          this.wrapper.style.height = `${newHeight}px`;
          const img = this.wrapper.querySelector('img');
          if (img) {
            img.style.height = '100%';
          }
        }
      };
  
      const stopResize = () => {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
      };
    }
  
    save(blockContent: HTMLElement) {
      const img = blockContent.querySelector('img');
      return Object.assign(this.data, {
        url: img?.src,
        caption: blockContent.querySelector('[contenteditable]')?.innerHTML || '',
        height: this.wrapper?.offsetHeight
      });
    }
  }
  
