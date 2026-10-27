# AgeCalculator.today Complete Multilingual Rollout: Team Instructions

**Domain:** `agecalculator.today`  
**Approach:** Single domain with language subfolders. English remains at the root (`/`) to preserve established search rankings.  
**Coverage:** 33 Languages across Tier 1 (High Traffic), Tier 2 (Strong Global Markets), and Tier 3 (Regional & High Opportunity).

---

## 1. Master 33-Language Matrix

### Tier 1: High Traffic (Primary Priority)
| Language | Code | Target Countries | Primary Native Keyword | hreflang | Direction |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **English** | `en` | USA, UK, Canada, Australia, India | `age calculator` | `en` | LTR |
| **Spanish** | `es` | Spain, Mexico, Argentina, Colombia | `calculadora de edad` | `es` | LTR |
| **Portuguese** | `pt-br` | Brazil, Portugal | `calculadora de idade` | `pt-BR` | LTR |
| **German** | `de` | Germany, Austria, Switzerland | `altersrechner` | `de` | LTR |
| **French** | `fr` | France, Canada (Quebec), Belgium | `calculateur d'âge` | `fr` | LTR |
| **Italian** | `it` | Italy, Switzerland | `calcolo età` | `it` | LTR |

### Tier 2: Strong Global Markets
| Language | Code | Target Countries | Primary Native Keyword | hreflang | Direction |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Russian** | `ru` | Russia, Kazakhstan, Belarus | `калькулятор возраста` | `ru` | LTR |
| **Turkish** | `tr` | Turkey | `yaş hesaplama` | `tr` | LTR |
| **Indonesian**| `id` | Indonesia | `kalkulator umur` | `id` | LTR |
| **Japanese** | `ja` | Japan | `年齢計算` | `ja` | LTR |
| **Korean** | `ko` | South Korea | `만 나이 계산기` | `ko` | LTR |
| **Dutch** | `nl` | Netherlands, Belgium | `leeftijd calculator` | `nl` | LTR |
| **Polish** | `pl` | Poland | `kalkulator wieku` | `pl` | LTR |
| **Arabic** | `ar` | Saudi Arabia, UAE, Egypt | `حاسبة العمر` | `ar` | **RTL** |
| **Vietnamese**| `vi` | Vietnam | `tính tuổi` | `vi` | LTR |
| **Thai** | `th` | Thailand | `คำนวณอายุ` | `th` | LTR |
| **Hindi** | `hi` | India | `आयु कैलकुलेटर` | `hi` | LTR |

### Tier 3: Regional & High-Opportunity
| Language | Code | Target Countries | Primary Native Keyword | hreflang | Direction |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Urdu** | `ur` | Pakistan | `عمر کیلکولیٹر` | `ur` | **RTL** |
| **Bengali** | `bn` | Bangladesh, India | `বয়স ক্যালকুলেটর` | `bn` | LTR |
| **Filipino** | `fil` | Philippines | `kalkulator ng edad` | `fil` | LTR |
| **Malay** | `ms` | Malaysia, Singapore | `kalkulator umur` | `ms` | LTR |
| **Chinese (Simp)**| `zh-cn`| China, Singapore | `年龄计算器` | `zh-CN` | LTR |
| **Chinese (Trad)**| `zh-tw`| Taiwan, Hong Kong | `年齡計算器` | `zh-TW` | LTR |
| **Swedish** | `sv` | Sweden | `åldersräknare` | `sv` | LTR |
| **Norwegian** | `no` | Norway | `alderskalkulator` | `no` | LTR |
| **Danish** | `da` | Denmark | `aldersberegner` | `da` | LTR |
| **Finnish** | `fi` | Finland | `ikälaskuri` | `fi` | LTR |
| **Czech** | `cs` | Czech Republic | `věková kalkulačka` | `cs` | LTR |
| **Romanian** | `ro` | Romania | `calculator vârstă` | `ro` | LTR |
| **Greek** | `el` | Greece, Cyprus | `υπολογιστής ηλικίας` | `el` | LTR |
| **Hebrew** | `he` | Israel | `מחשבון גיל` | `he` | **RTL** |
| **Ukrainian** | `uk` | Ukraine | `калькулятор віку` | `uk` | LTR |
| **Hungarian** | `hu` | Hungary | `életkor kalkulátor` | `hu` | LTR |

---

## 2. Technical Architecture & Setup

1. **Subfolder Routing (`src/App.jsx`):**
   - Direct handling of English root (`/`)
   - Dynamic localized subfolder routing: `/:lang` and `/:lang/:slug`
   - Handles all 33 languages dynamically without requiring separate manual route entries for each language.

2. **Self-Referencing Canonical & hreflang (`src/components/CanonicalManager.jsx`):**
   - Each page self-references its own canonical URL.
   - Dynamically injects 33 reciprocal `<link rel="alternate" hreflang="...">` tags + `x-default` (pointing to English root).
   - Sets `<html lang="..." dir="...">` (`rtl` for Arabic, Urdu, Hebrew; `ltr` for all others).

3. **Language Switcher (`src/components/LanguageSwitcher.jsx`):**
   - **Header Dropdown:** Search input, category filter tabs (`All (33)`, `Tier 1 (6)`, `Tier 2 (11)`, `Tier 3 (16)`), and RTL markers.
   - **Footer:** Categorized by Tier 1, Tier 2, and Tier 3 with crawlable native links.
   - **Equivalent Page Navigation:** Directly transitions to the corresponding tool without bouncing to home.

4. **No Auto-Redirects (`src/components/LanguageBanner.jsx`):**
   - Zero IP or header-based redirects to protect search bot indexability.
   - Dismissible recommendation banner based on browser language.

5. **XML Sitemap (`public/sitemap.xml`):**
   - Fully generated with `xmlns:xhtml="http://www.w3.org/1999/xhtml"` containing all reciprocal alternate tags across all 33 languages.
