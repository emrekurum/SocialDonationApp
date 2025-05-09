module.exports = {
  // Projenin kök dizininde olduğumuzu belirtir, ESLint'in üst dizinlerdeki yapılandırma dosyalarını aramasını engeller.
  root: true,

  // Temel yapılandırma olarak @react-native topluluğunun ESLint kurallarını kullanır.
  // Bu genellikle React Native projeleri için iyi bir başlangıç noktasıdır.
  extends: '@react-native',

  // Kodunuzu ayrıştırmak (parse etmek) için @babel/eslint-parser kullanılır.
  // Bu, modern JavaScript özelliklerini ve Babel tarafından işlenen kodu anlamasına yardımcı olur.
  parser: '@babel/eslint-parser',

  parserOptions: {
    // ESLint'in Babel parser'ının ayrı bir babel.config.js dosyası aramasını engeller (requireConfigFile: false).
    // Bunun yerine, aşağıdaki babelOptions kullanılır.
    requireConfigFile: false,
    ecmaFeatures: {
      // JSX sözdizimini etkinleştirir. @react-native zaten bunu yapabilir ama açıkça belirtmek zarar vermez.
      jsx: true,
    },
    ecmaVersion: 'latest', // En son ECMAScript özelliklerini destekler
    sourceType: 'module', // ES modüllerini kullanmamıza izin verir (import/export)

    // ESLint'in kullandığı @babel/eslint-parser için özel Babel seçenekleri.
    // Bu, ESLint'in kodunuzu projenizin ana Babel yapılandırmasına benzer şekilde anlamasına yardımcı olur.
    babelOptions: {
      // Projenizin ana babel.config.js dosyasında kullanılan preset'lerle tutarlı olmalıdır.
      // Güncel React Native versiyonları için 'module:@react-native/babel-preset' kullanılır.
      presets: ['module:@react-native/babel-preset'],
      // 'react-native-dotenv' eklentisi buradan kaldırıldı.
      plugins: [
        // Projenizin kullandığı diğer Babel plugin'leri varsa ve ESLint'in bunları bilmesi gerekiyorsa buraya eklenebilir.
      ],
    },
  },

  // Projenize özel ESLint kurallarını burada tanımlayabilir veya mevcut kuralları geçersiz kılabilirsiniz.
  rules: {
    // Örnek: Prettier ile entegrasyon için (eğer kullanıyorsanız)
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // Örnek: Kullanılmayan değişkenler için uyarı (varsayılan olarak @react-native'de olabilir)
    // 'no-unused-vars': 'warn',
  },

  settings: {
    // Eğer eslint-plugin-import kullanıyorsanız ve modül çözümlemesiyle ilgili sorunlar yaşıyorsanız,
    // resolver ayarlarını burada yapabilirsiniz.
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      // Eğer babel-plugin-module-resolver veya benzeri bir şey kullanıyorsanız:
      // 'babel-module': {}, // (npm install eslint-import-resolver-babel-module --save-dev)
    },
  },
};
