# Project Governance — Institut La Clé

> Document de gouvernance officiel du projet **Institut La Clé — Site Vitrine**.
> Toute décision produit, UX, UI, technique ou fonctionnelle doit être évaluée selon les règles définies ci-dessous.
> Ce document est la référence absolue en cas de doute.

---

## 1. Philosophie de gouvernance

Ce projet repose sur quatre arbitrages fondamentaux. Ils ne sont pas négociables.

| Priorité haute | Priorité basse |
|---|---|
| Cohérence | Rapidité |
| Posture institutionnelle | Conversion agressive |
| Structure | Effets visuels |
| Vision long terme | Optimisation court terme |

**Principe directeur** : chaque décision doit renforcer la crédibilité institutionnelle du site. Si une décision produit un gain immédiat mais érode la posture, elle est rejetée.

Le site n'est pas un outil de vente. C'est une vitrine institutionnelle. Il doit inspirer confiance, autorité et sérieux. Chaque pixel, chaque mot, chaque interaction doit servir cette intention.

---

## 2. Règles de décision produit

### Principe

Aucune décision produit ne peut être prise sans passer par la grille d'évaluation suivante.

### Checklist décisionnelle obligatoire

Avant toute modification, ajout ou suppression, répondre à ces cinq questions :

- [ ] **Alignement PRD** — Cette décision est-elle explicitement alignée avec le PRD en vigueur ?
- [ ] **Posture institutionnelle** — Renforce-t-elle la crédibilité et l'autorité perçue de l'institut ?
- [ ] **Biais marketing** — Introduit-elle un ton promotionnel, une urgence artificielle ou un mécanisme de persuasion ?
- [ ] **Complexité architecturale** — Ajoute-t-elle de la complexité technique sans valeur proportionnelle ?
- [ ] **Réversibilité** — Si cette décision s'avère incorrecte, peut-elle être annulée sans dette technique ?

**Règle** : si une seule réponse est négative ou douteuse, la décision est suspendue et soumise à analyse approfondie.

---

## 3. Règles d'évolution fonctionnelle

### Ce qui peut évoluer

- Le contenu textuel des sections existantes (wording, reformulations)
- Les images et médias dans les emplacements prévus
- Les micro-interactions existantes (ajustements de timing, d'easing)
- Les données structurées (métadonnées SEO, balises Open Graph)

### Ce qui ne peut jamais évoluer sans validation stratégique

- Le parcours séquencé de navigation (ordre des sections, logique de scroll)
- Le CTA principal unique et son positionnement
- La posture rédactionnelle (ton, registre, niveau de langue)
- L'architecture des pages (nombre, hiérarchie, rôle de chaque page)
- La structure de la page d'accueil

### Zones figées

Les éléments suivants sont verrouillés. Toute modification requiert une revue stratégique complète :

1. **Parcours séquencé** — L'ordre des sections est intentionnel. Il ne peut pas être réarrangé.
2. **CTA unique** — Un seul appel à l'action principal par page. Pas de CTA secondaires concurrents.
3. **Posture institutionnelle** — Aucun élément ne doit glisser vers un ton commercial, promotionnel ou familier.
4. **Hiérarchie typographique** — Les niveaux de titres et leur rôle sémantique sont définis et fixes.

---

## 4. Gouvernance UX

### Règles strictes

1. **Aucun nouveau CTA** ne peut être ajouté sans justification stratégique documentée et validée. Un CTA ajouté "pour voir" ou "au cas où" est interdit.

2. **Aucun nouveau lien transversal** entre sections ou pages ne peut être introduit. Le parcours est linéaire et séquencé. Les raccourcis nuisent à l'expérience intentionnelle.

3. **Aucune animation décorative** ne peut être ajoutée. Toute animation doit avoir une fonction : guider l'attention, signaler une transition, ou renforcer la hiérarchie visuelle. Si elle ne remplit aucune de ces fonctions, elle est supprimée.

4. **Le rythme vertical est sacré.** Chaque section respire. Les espacements sont calculés. Toute évolution UX doit préserver ce rythme. Un ajout de contenu qui compresse le rythme vertical est refusé jusqu'à recomposition de la section.

5. **Le scroll est le mode de navigation principal.** Aucun mécanisme ne doit interrompre, détourner ou accélérer le scroll naturel (pas de scroll hijacking, pas d'ancres automatiques non sollicitées).

6. **La hiérarchie de l'information est fixe.** L'ordre de lecture est : titre > sous-titre > corps > CTA. Aucun élément ne doit court-circuiter cette séquence.

---

## 5. Gouvernance UI

### Règles

1. **Palette de couleurs** — Aucun changement de couleur sans validation globale. Un changement de couleur impacte l'ensemble du design system. Il ne peut pas être local.

2. **Typographie** — Aucune nouvelle police ne peut être introduite sans refonte complète du design system typographique. Les tailles, graisses et interlignes sont définis et liés entre eux.

3. **Grille** — Toute nouvelle section doit respecter la grille définie (colonnes, gouttières, marges). Aucune section ne peut définir sa propre grille.

4. **Composants** — Les composants one-off non réutilisables sont interdits. Si un composant n'est utilisé qu'une seule fois et ne correspond à aucun pattern existant, il doit être repensé ou intégré dans un pattern existant.

5. **Icônes et illustrations** — Tout ajout visuel doit respecter le style graphique établi. Pas de mélange de styles (flat + outlined, illustratif + photographique).

6. **Espacements** — Les valeurs d'espacement suivent une échelle définie. Aucune valeur arbitraire (pas de `margin: 13px` ou `padding: 37px`). Utiliser exclusivement les tokens de spacing du design system.

7. **Ombres et élévations** — Les niveaux d'élévation sont prédéfinis. Aucune ombre custom sans intégration dans le système d'élévation.

---

## 6. Gouvernance technique

### Règles d'architecture

| Règle | Seuil |
|---|---|
| Taille maximale d'une page | 250 lignes |
| Taille maximale d'un composant | 150 lignes |
| Duplication tolérée | 0 — refactor obligatoire |
| Dette technique volontaire | Interdite |
| Code review avant merge | Obligatoire |

### Structure des dossiers

```
src/
  pages/          → Pages uniquement (composition de composants)
  components/     → Composants réutilisables
    ui/           → Composants UI primitifs (boutons, inputs, cards)
    layout/       → Composants de structure (header, footer, grid)
    sections/     → Composants de sections de page
  hooks/          → Logique réutilisable (custom hooks)
  utils/          → Fonctions utilitaires pures
  constants/      → Constantes et configuration
  types/          → Types et interfaces
  styles/         → Styles globaux et tokens
  assets/         → Images, fonts, icônes
```

### Conventions de nommage

- **Fichiers composants** : PascalCase (`HeroSection.tsx`)
- **Fichiers utilitaires** : camelCase (`formatDate.ts`)
- **Fichiers de style** : kebab-case lié au composant (`hero-section.module.css`)
- **Constantes** : UPPER_SNAKE_CASE (`MAX_SECTION_WIDTH`)
- **Types/Interfaces** : PascalCase avec préfixe si nécessaire (`SectionProps`, `NavigationItem`)
- **Dossiers** : kebab-case (`hero-section/`)

### Séparation UI / Logique

- Un composant ne contient jamais de logique métier.
- La logique est extraite dans des hooks ou des utilitaires.
- Les composants reçoivent des données via props. Ils ne fetchent pas, ne calculent pas, ne transforment pas.
- Un composant = un rendu. Un hook = une logique. Un utilitaire = une transformation.

### Performance

- **Aucune image non optimisée** — Toutes les images doivent être au format WebP ou AVIF avec fallback.
- **Lazy loading obligatoire** pour tout contenu sous la ligne de flottaison.
- **Aucun bundle JavaScript non justifié** — Chaque dépendance ajoutée doit être évaluée en termes de poids.
- **Score Lighthouse minimum** : Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 95.
- **Pas de layout shift** — CLS doit rester à 0 ou quasi-nul.

### Accessibilité

- Toutes les images ont un attribut `alt` descriptif.
- La navigation est entièrement utilisable au clavier.
- Les contrastes respectent le niveau WCAG AA minimum (ratio 4.5:1 pour le texte).
- Les formulaires ont des labels associés et des messages d'erreur explicites.
- La structure sémantique HTML est respectée (un seul `h1` par page, hiérarchie `h2`→`h3`→`h4`).
- Les éléments interactifs ont des états focus visibles.

---

## 7. Gestion des demandes client

### Protocole

Toute demande client suit le processus suivant, sans exception :

#### Étape 1 — Réception et analyse

La demande est analysée selon quatre axes :

| Axe | Question |
|---|---|
| Alignement stratégique | Cette demande est-elle cohérente avec la vision du PRD ? |
| Impact UX | Modifie-t-elle le parcours, le rythme ou la hiérarchie ? |
| Impact architecture | Introduit-elle de la complexité technique disproportionnée ? |
| Impact posture | Risque-t-elle de dégrader la perception institutionnelle ? |

#### Étape 2 — Décision

- **Si la demande est alignée sur les 4 axes** → Exécution.
- **Si la demande est partiellement alignée** → Proposition d'adaptation qui préserve l'intention client tout en respectant la gouvernance.
- **Si la demande fragilise la cohérence** → Refus argumenté + proposition d'alternative.

#### Étape 3 — Règle absolue

**Ne jamais exécuter aveuglément.** Une demande client n'est pas un ordre technique. C'est une intention à traduire dans le cadre de la gouvernance du projet. Le rôle du développeur est de protéger le projet, y compris contre les demandes bien intentionnées mais destructrices.

---

## 8. Gestion de la dette technique

### Détection

La dette technique est identifiée par les signaux suivants :

- Un composant dépasse 150 lignes
- Une page dépasse 250 lignes
- Un pattern est dupliqué plus d'une fois
- Un `// TODO` ou `// HACK` existe dans le code
- Une dépendance est utilisée pour une seule fonction
- Un workaround contourne un problème au lieu de le résoudre
- Les scores Lighthouse dégradent par rapport à la baseline

### Correction

- La dette technique est corrigée **immédiatement** si elle est détectée pendant le développement d'une fonctionnalité.
- Si elle est détectée hors contexte de développement, elle est documentée et planifiée dans le prochain cycle.
- **Aucune dette ne peut être empilée.** Deux éléments de dette technique non résolus bloquent tout nouveau développement fonctionnel jusqu'à résolution.

### Interdiction

- Pas de rustines. Pas de "on corrigera plus tard". Pas de "c'est temporaire".
- Si la solution propre prend plus de temps, elle est quand même privilégiée.
- Le code temporaire n'existe pas. Tout code mergé est du code permanent.

---

## 9. Process de validation

### Étapes avant mise en production

Aucune mise en production ne peut avoir lieu sans avoir complété **toutes** les étapes suivantes :

#### Checklist de validation

- [ ] **Lighthouse — Performance** ≥ 90
- [ ] **Lighthouse — Accessibility** ≥ 95
- [ ] **Lighthouse — Best Practices** ≥ 90
- [ ] **Lighthouse — SEO** ≥ 95
- [ ] **Accessibilité** — Navigation clavier testée sur l'ensemble du parcours
- [ ] **Accessibilité** — Contrastes vérifiés sur tous les textes
- [ ] **Accessibilité** — Lecteur d'écran testé sur les sections modifiées
- [ ] **Cohérence design** — Les modifications respectent le design system (couleurs, typo, espacements, grille)
- [ ] **Cohérence design** — Aucun composant one-off introduit
- [ ] **Respect PRD** — Les modifications sont alignées avec les spécifications du PRD
- [ ] **Respect PRD** — Aucune dérive fonctionnelle par rapport au scope défini
- [ ] **Responsive** — Testé sur mobile (375px), tablette (768px), desktop (1440px)
- [ ] **Cross-browser** — Testé sur Chrome, Firefox, Safari
- [ ] **Performance** — Aucune régression de temps de chargement
- [ ] **Code review** — Revue de code effectuée et approuvée
- [ ] **Gouvernance** — Toutes les modifications passent la checklist décisionnelle (section 2)

#### Règle de blocage

Si un seul point de la checklist échoue, la mise en production est bloquée. Pas d'exception.

---

## 10. Règle Ultime de Gouvernance

> **Si une décision améliore la conversion mais affaiblit la posture institutionnelle, elle doit être refusée.**

Cette règle prévaut sur toutes les autres. Elle ne peut être contournée par aucun argument de performance commerciale, de pression client ou d'opportunité technique.

Le site de l'Institut La Clé n'existe pas pour convertir. Il existe pour incarner. La conversion est une conséquence de la crédibilité, jamais un objectif qui la supplante.

Toute personne intervenant sur ce projet — développeur, designer, décideur — est tenue de respecter cette règle. En cas de conflit entre conversion et posture, la posture l'emporte. Toujours.

---

*Document de gouvernance — Institut La Clé — Site Vitrine*
*Version 1.0*
