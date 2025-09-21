import { createCanvas } from 'canvas';

export interface UIAvatarsOptions {
    /** 
     * Name or text to extract initials from 
     */
    text: string;

    /** 
     * Avatar size in pixels (default: 128) 
     */
    size?: number;

    /** 
     * Whether the avatar should be fully rounded 
     */
    rounded?: boolean;

    /** 
     * Output format (default: png) 
     */
    extension?: "png" | "svg";

    /** 
     * Text color (default: #FFF) 
     */
    textColor?: string;

    /** 
     * Background color (default: random color) 
     */
    bgColor?: string;

    /** 
     * Whether to convert text to uppercase 
     */
    upperCase?: boolean;

    /** 
     * Font size in CSS units (default: size/2 px) 
     */
    fontSize?: string;

    /** 
     * Font family (default: `sans-serif` fallback) 
     */
    fontFamily?: string;
}


/**
 * Generate an avatar image buffer with initials.
 * @param options UIAvatarsOptions
 * @returns {Buffer} (png or svg) ready to save
 */
export function UIAvatars(options: UIAvatarsOptions) {
    const { text, size = 128, rounded = false, extension = "png", textColor = "#FFFFFF", bgColor, upperCase = true, fontSize, fontFamily = "sans-serif" } = options;
    if(!text || !text.length) throw new Error('UI Avatars → Text is required.');

    const InText = text.trim().split(/\s+/);
    let Initials = InText.length > 1 ? (InText[0]?.charAt(0) ?? '') + (InText[InText.length - 1]?.charAt(0) ?? '') : InText[0]?.charAt(0) ?? '';
    if(options.upperCase) Initials = Initials.toUpperCase();
    else if(!options.upperCase) Initials = Initials.toLowerCase();

    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = bgColor ?? `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    if (rounded) {
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    } else {
        ctx.fillRect(0, 0, size, size);
    }

    ctx.fillStyle = textColor;
    ctx.font = `${fontSize ?? `${size / 2}px`} ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(Initials, size / 2, size / 2);

    return canvas.toBuffer(extension === 'svg' ? 'image/svg+xml' : 'image/png' as any);
}