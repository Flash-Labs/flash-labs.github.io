## Java Code Style

We use [Google's Java Style Guide](https://google.github.io/styleguide/javaguide.html) with the following modifications.

 - License Information ([3.1](https://google.github.io/styleguide/javaguide.html#s3.1-copyright-statement))
    - A license header is not included in individual source files.
 - Import Order ([3.3.3](https://google.github.io/styleguide/javaguide.html#s3.3.3-import-ordering-and-spacing))
    - Place java/javax imports in a separate block below other imports.
 - Static Imports ([3.3.4](https://google.github.io/styleguide/javaguide.html#s3.3.4-import-class-not-static))
    - Do not use static imports.
 - Empty Blocks ([4.1.3](https://google.github.io/styleguide/javaguide.html#s4.1.3-braces-empty-blocks))
    - Braces for empty blocks are on the same line. This includes an empty catch block.
 - Block Indentation ([4.2](https://google.github.io/styleguide/javaguide.html#s4.2-block-indentation))
    - Use `4` spaces for blocks.
 - Line Length ([4.4](https://google.github.io/styleguide/javaguide.html#s4.4-column-limit))
    - Code lines should not exceed `120` characters.
    - Javadocs should not exceed `80` characters.
 - Line Wrapping ([4.5](https://google.github.io/styleguide/javaguide.html#s4.5-line-wrapping))
    - Use `8` spaces for continuation.
 - Vertical Spacing ([4.6.1](https://google.github.io/styleguide/javaguide.html#s4.6.1-vertical-whitespace))
    - Include blank lines at the start and end of a class declaration.
 - Horizontal Alignment ([4.6.3](https://google.github.io/styleguide/javaguide.html#s4.6.3-horizontal-alignment))
    - Do not align variables (or anything else) in this manner.
 - Annotations ([4.8.5](https://google.github.io/styleguide/javaguide.html#s4.8.5-annotations))
    - Method annotations are defined on separate lines.
    - Field annotations are defined on the same line.
 - Numeric Literals ([4.8.8](https://google.github.io/styleguide/javaguide.html#s4.8.8-numeric-literals))
    - Use uppercase letters for type suffixes and hexadecimal characters.
    - Use lowercase letters for bases and exponents (`0xFF`, `1e9`).
 - Unused Exceptions ([6.2](https://google.github.io/styleguide/javaguide.html#s6.2-caught-exceptions))
    - Exceptions which are unused should be named `ignored`.
