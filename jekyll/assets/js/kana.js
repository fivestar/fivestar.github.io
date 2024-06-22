/*!
 * kana.js
 *
 * (C) 2024 Katsuhiro Ogawa
 */
!function (mb_convert_kana) {

  document.addEventListener("DOMContentLoaded", () => {
    const source = document.querySelector("#kana-source");
    const dests = document.querySelectorAll("#kana-form-dest .kana-control");
    const resetButton = document.querySelector(".kana-control__button--reset");

    function convertAll(srcText) {
      dests.forEach(dest => {
        const output = dest.querySelector("textarea")
        const copyButton = dest.querySelector(".kana-control__button--copy")

        output.value = mb_convert_kana(srcText, output.dataset.convert)

        copyButton.textContent = "Copy"
        copyButton.disabled = (srcText == "")
      })
      resetButton.disabled = (srcText == "")
    }

    convertAll(source.value = "")

    source.addEventListener("keyup", () => convertAll(source.value))

    resetButton.addEventListener("click", () => convertAll(source.value = ""))

    dests.forEach(dest => {
      const output = dest.querySelector("textarea")
      const copyButton = dest.querySelector(".kana-control__button--copy")

      function doCopy(text) {
        return navigator.clipboard.writeText(text)
      }

      output.placeholder = mb_convert_kana(source.placeholder, output.dataset.convert)

      copyButton.addEventListener("click", () => {
        const text = output.value
        if (text.length > 0) {
          doCopy(output.value).then(copyButton.textContent = "Copied!")
        }
      })
    })

  })


}(window.mb_convert_kana);
