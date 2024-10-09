


class Page extends View {
  constructor(height, width, bgColor, content) {
    super(height, width, bgColor, content);
    this.div.style.backgroundColor = bgColor;
  }
}
