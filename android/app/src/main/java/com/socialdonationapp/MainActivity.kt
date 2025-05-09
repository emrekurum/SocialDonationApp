package com.social.donation // <<< DEĞİŞİKLİK BURADA: Paket adı "com.social.donation" olarak güncellendi

import android.os.Bundle // react-native-gesture-handler için eklendi
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "SocialDonationApp" // app.json dosyanızdaki name ile eşleşmeli

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  /**
   * react-native-gesture-handler için eklenmesi gereken metod.
   * Bu metodun eklenmesi, özellikle Yeni Mimari (New Architecture) kullanılıyorsa
   * veya gesture handler ile ilgili build hataları alınıyorsa önemlidir.
   */
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null) // Bu satır gesture handler'ın düzgün çalışması için önemlidir.
                         // Eğer projenizde zaten super.onCreate(savedInstanceState) varsa
                         // ve null geçmek sorun yaratıyorsa, null yerine savedInstanceState kullanmayı deneyin,
                         // ancak gesture handler dokümantasyonu genellikle null önerir.
                         // React Native'in yeni sürümleri ve gesture handler'ın son versiyonları için
                         // bu satırın bu şekilde olması genellikle en iyi pratiktir.
  }
}
