    // babel.config.js
    module.exports = {
      presets: ['module:@react-native/babel-preset'],
      plugins: [
        // 'module:react-native-dotenv' plugin'i buradan kaldırıldı.
        // Projenizde kullandığınız diğer Babel plugin'leri varsa burada yer alabilir
        // Örneğin, Reanimated için:
        // 'react-native-reanimated/plugin',
      ],
    };
    