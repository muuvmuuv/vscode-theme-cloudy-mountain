const fs = require('fs')
const path = require('path')

const YAML = require('yaml')

const colorThemeName = 'light'
const colorThemeSuffix = '.color-theme.json'

const themesFolder = path.resolve(__dirname, '../themes')

async function generate() {
  const colors = await getColors()

  let themeInfo = await getThemeInfo(colorThemeName)
  let themeColors = await getThemeColors(colorThemeName)
  let themeTokenColors = await getThemeTokenColors(colorThemeName)

  Object.keys(themeColors).forEach(name => {
    const match = themeColors[name].match(/{{(.*?)}}/i)
    if (match) {
      const color = colors[match[1]]
      if (color) {
        themeColors[name] = color
      } else {
        throw new Error(`Ooops, this variable does not exist: ${name}`)
      }
    }
  })

  const colorTheme = {
    ...themeInfo,
    colors: themeColors,
    tokenColors: themeTokenColors,
  }
  const colorThemeFile = path.resolve(
    themesFolder,
    `${colorThemeName}${colorThemeSuffix}`
  )

  fs.writeFileSync(colorThemeFile, JSON.stringify(colorTheme, null, 2))
}

async function getThemeInfo(name) {
  const themePath = path.resolve(themesFolder, name)
  const file = path.resolve(themePath, 'info.yaml')
  const content = fs.readFileSync(file, 'utf-8')
  const obj = YAML.parse(content)
  return obj
}

async function getThemeColors(name) {
  const themePath = path.resolve(themesFolder, name)
  const file = path.resolve(themePath, 'colors.yaml')
  const content = fs.readFileSync(file, 'utf-8')
  const obj = YAML.parse(content)
  return obj
}

async function getThemeTokenColors(name) {
  const themePath = path.resolve(themesFolder, name)
  const file = path.resolve(themePath, 'tokens.yaml')
  const content = fs.readFileSync(file, 'utf-8')
  const obj = YAML.parse(content)
  return obj
}

async function getColors() {
  const file = path.resolve(themesFolder, 'variables.yaml')
  const content = fs.readFileSync(file, 'utf-8')
  const obj = YAML.parse(content)
  return obj
}

generate()
