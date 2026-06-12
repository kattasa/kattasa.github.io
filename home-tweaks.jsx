// home-tweaks.jsx — Tweaks panel for the home page.
// Loaded as <script type="text/babel" src="home-tweaks.jsx"></script>.

const { TweaksPanel, TweakSection, TweakToggle, TweakColor, TweakRadio, useTweaks } = window;

const HOME_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#2a3f8f",
  "headshotShape": "rounded",
  "density": "regular",
  "showSelectedWork": false,
  "showRecentNews": true,
  "fontTreatment": "sans"
}/*EDITMODE-END*/;

function applyHomeTweaks(t) {
  const b = document.body;
  b.dataset.headshot = t.headshotShape;
  b.dataset.density  = t.density;
  b.dataset.showWork = String(t.showSelectedWork);
  b.dataset.showNews = String(t.showRecentNews);
  document.documentElement.style.setProperty('--accent', t.accentColor);
  document.documentElement.style.setProperty('--accent-2', t.accentColor + '1a');
  const fontMap = {
    sans:  "'Inter Tight','Inter',system-ui,sans-serif",
    serif: "'Newsreader',Georgia,'Times New Roman',serif",
    mixed: "'Inter Tight','Inter',system-ui,sans-serif",
  };
  document.body.style.fontFamily = fontMap[t.fontTreatment] || fontMap.sans;
  document.querySelectorAll('h1,h2,h3,.brand,.pubgroup-title').forEach(el => {
    el.style.fontFamily = (t.fontTreatment === 'mixed') ? "'Newsreader',Georgia,serif" : '';
    if (t.fontTreatment === 'mixed' && el.tagName === 'H1') el.style.fontWeight = '500';
  });
}

function HomeTweaksApp() {
  const [t, setTweak] = useTweaks(HOME_TWEAK_DEFAULTS);
  React.useEffect(() => { applyHomeTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Layout" />
      <TweakToggle label="Show selected work"
        value={t.showSelectedWork}
        onChange={(v) => setTweak('showSelectedWork', v)} />
      <TweakToggle label="Show recent news"
        value={t.showRecentNews}
        onChange={(v) => setTweak('showRecentNews', v)} />
      <TweakRadio label="Density" value={t.density}
        options={['compact', 'regular', 'airy']}
        onChange={(v) => setTweak('density', v)} />

      <TweakSection label="Headshot" />
      <TweakRadio label="Shape" value={t.headshotShape}
        options={['rounded', 'circle']}
        onChange={(v) => setTweak('headshotShape', v)} />

      <TweakSection label="Theme" />
      <TweakColor label="Accent color"
        value={t.accentColor}
        onChange={(v) => setTweak('accentColor', v)} />
      <TweakRadio label="Type" value={t.fontTreatment}
        options={['sans', 'mixed', 'serif']}
        onChange={(v) => setTweak('fontTreatment', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<HomeTweaksApp />);
