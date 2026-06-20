(function () {
  'use strict';

  if (!location.pathname.startsWith('/dashboard')) return;

  // ─── Level Data ────────────────────────────────────────────────────────────

  const LEVELS = [
    {
      level: 1,
      hours: 0,
      words: 0,
      tagline: 'Starting from zero.',
      color: '#e05c5c',
      bgColor: '#fff0f0',
      icon: '🎖️',
      canDo: `Japanese sounds feel foreign and indistinct to your ears. You can't tell many sounds apart from each other. When hearing the language, it's hard to know when one word ends and the next begins. Even when you guess what a sentence means, you often can't identify the individual parts. You cannot say words and be confident that a native speaker would understand you.`,
      needToDo: `<span style="color:#e8a020;font-weight:600">Listen A LOT.</span> The listening needs to be <em>comprehensible</em>. Seek out CI-style videos where teachers use many visuals — drawings, pictures, gestures, and context — to make meaning clear. <span style="color:#e05c5c">Reading is <strong>not recommended</strong> until much later</span>, especially if you care about developing natural pronunciation. <span style="color:#e05c5c">Speaking and writing are <strong>not recommended</strong> yet.</span>`,
      learning: `You mostly encounter individual <span style="color:#7c5cbf;font-weight:600">nouns for concrete things</span>: car, food, animal. Simple <span style="color:#7c5cbf;font-weight:600">action verbs</span>: walk, eat, look. Basic <span style="color:#7c5cbf;font-weight:600">adjectives</span> for emotions and sensations. Common <span style="color:#7c5cbf;font-weight:600">interjections and greetings</span>. The three Japanese writing systems (hiragana, katakana, kanji) may feel overwhelming — focus on listening first and let reading come later naturally.`,
    },
    {
      level: 2,
      hours: 100,
      words: 300,
      tagline: 'You recognize some common words.',
      color: '#d64f8f',
      bgColor: '#fff0f8',
      icon: '🛡️',
      canDo: `You <span style="color:#d64f8f;font-weight:600">recognize some common words</span>, even if you're not 100% sure how they're pronounced. You can guess the meaning of very short phrases like "go home" or "eat something." There are only a few words you could produce yourself. For many words, you're still unsure about word boundaries in natural speech.`,
      needToDo: `<span style="color:#e8a020;font-weight:600">Listen A LOT.</span> You are still best served by <span style="color:#e8a020">CI-style content</span> where teachers speak in a very comprehensible way with heavy visual support. With a few words under your belt, you're better prepared to absorb more. <span style="color:#e05c5c">Reading is <strong>not recommended</strong> yet.</span>`,
      learning: `<span style="color:#7c5cbf;font-weight:600">More verbs</span>, since nouns help you understand them. Still mostly nouns and verbs for concrete things. Many expressions are learned <span style="color:#7c5cbf;font-weight:600">as a chunk</span> — you don't know what their parts mean yet. Basic Japanese <span style="color:#7c5cbf;font-weight:600">SOV sentence order</span>. Core particles (は, が, を, に) will remain unclear for a long time.`,
    },
    {
      level: 3,
      hours: 300,
      words: 1500,
      tagline: 'You can follow learner-adapted content.',
      color: '#7c5cbf',
      bgColor: '#f5f0ff',
      icon: '🏆',
      canDo: `You can now <span style="color:#7c5cbf;font-weight:600">understand people if they stay within certain topics</span>. They still need to speak in a way that's appropriate for your level — clearly and with familiar vocabulary — but you know many words and don't rely exclusively on visual support. You <span style="color:#e05c5c">still aren't fully accustomed to the sounds</span> of the language. You have a good intuition for basic grammar and sentence order. You can say quite a few words, which would already be useful when traveling to Japan.`,
      needToDo: `<span style="color:#e8a020;font-weight:600">Listen A LOT.</span> You can now try videos or lessons where the teacher uses less visual input, and may even be able to enjoy easy audios and podcasts targeted at learners. <span style="color:#e8a020">Crosstalk</span> is still one of the best ways to spend your time — and at this level it becomes easier to do via video call. <span style="color:#e05c5c">Reading is still not ideal</span> if you care about your final pronunciation, but hiragana/katakana reading of familiar words is fine.`,
      learning: `Because you're getting used to what Japanese sounds like and what sound combinations to expect, you start <span style="color:#7c5cbf;font-weight:600">acquiring words faster</span>. You learn nouns faster and faster. You start learning <span style="color:#7c5cbf;font-weight:600">more adjectives</span> and <span style="color:#7c5cbf;font-weight:600">more abstract terms</span> for feelings and appearance. You're getting used to more complicated patterns: て-form, common verb conjugations (ます/です), and basic particles become more intuitive.`,
    },
    {
      level: 4,
      hours: 600,
      words: 3000,
      tagline: 'You can understand a patient native speaker.',
      color: '#3b6fd4',
      bgColor: '#f0f4ff',
      icon: '🧊',
      canDo: `You're at the <span style="color:#3b6fd4;font-weight:600">intermediate level</span>! You can understand a <span style="color:#3b6fd4">patient</span> native speaker. You still miss some words, but the speaker can explain meaning to you without resorting to translation. You can <span style="color:#3b6fd4;font-weight:600">understand a range of daily topics</span> without constant visual support. The sounds of Japanese are becoming much clearer, and you're getting used to how sounds naturally combine. If you needed to get your point across in a store, you could manage most of the time.`,
      needToDo: `<span style="color:#e8a020;font-weight:600">Listen A LOT.</span> You can understand videos or lessons where the teacher doesn't use much visual input. Benefit from listening to <span style="color:#e8a020">podcasts and audio for learners</span> everywhere you go, any time you can. <span style="color:#e8a020">Crosstalk</span> is still the best, most efficient way to improve. You can now make friends with whom you communicate only in Japanese. <span style="color:#7c5cbf">Manga with furigana</span> and simple graded readers are fine now if you care about reading. <span style="color:#e05c5c">Speaking early will invariably result in hard-to-fix non-native pronunciation, noticeably bad grammar, and poor word usage</span> — consider waiting longer if pronunciation matters to you.`,
      learning: `Surprisingly, in this phase you learn many <span style="color:#7c5cbf;font-weight:600">common function words</span> that are often taught first in textbooks. Copulas (です/だ), conjunctions (だから, でも, そして), common verb endings, and many pronouns. Once you become aware of a new word, you'll encounter it everywhere. At this point you may start <span style="color:#e05c5c">feeling that there are more words you don't know than words you do know</span>. Don't worry — you'll eventually acquire all the words you've learned until now. By this point you're acquiring all kinds of vocabulary, both concrete and abstract.`,
    },
    {
      level: 5,
      hours: 1200,
      words: 5000,
      tagline: 'You can understand native speakers at normal pace.',
      color: '#1a9e8f',
      bgColor: '#f0fffe',
      icon: '🪶',
      canDo: `You can understand native speakers well when they speak directly to you at a <span style="color:#1a9e8f;font-weight:600">normal pace</span>. They <span style="color:#1a9e8f">won't need to adapt their speech</span> for you anymore. Understanding a conversation between two native speakers is still hard. You'll understand most TV programs in Japanese, but they're still challenging enough to occasionally frustrate or bore you. <span style="color:#e8a020">Conversation can be tiring</span>. You understand most of the words used during daily conversation but can't produce many yet. However, your phonological awareness is strong — you can often speak with correct intonation patterns intuitively.`,
      needToDo: `<span style="color:#e8a020;font-weight:600">Listen A LOT.</span> You can now access a wider variety of content. <span style="color:#e8a020">Easy anime, variety shows, and casual podcasts</span> are accessible now. Listen to <span style="color:#e8a020">native-level audio</span> daily. <span style="color:#e8a020">Crosstalk</span> is still as good as always. <span style="color:#7c5cbf">Reading manga and NHK Web Easy</span> is now very useful. Setting your devices, apps, and social media to Japanese is highly recommended. Graded readers can be skipped at this stage for books targeted at children of lower grade levels.`,
      learning: `This level <span style="color:#e05c5c">can feel frustratingly similar to the previous one</span>. You will still feel there are many more words you don't know. But you'll now experience many instances of <em>finally</em> understanding a word you've been hearing forever. <span style="color:#7c5cbf;font-weight:600">Abstract vocabulary</span> (democracy, patience, absence) will be your bread and butter, as will more grammatical connectors. At this level you'll <span style="color:#7c5cbf">mostly finish acquiring core grammar</span> patterns and different sentence types. While still not producing the most complex sentences yourself, you'll understand almost every type of sentence.`,
    },
    {
      level: 6,
      hours: 2000,
      words: 7000,
      tagline: 'You are comfortable with everyday Japanese.',
      color: '#2a9a4a',
      bgColor: '#f0fff4',
      icon: '🌱',
      canDo: `You can really <span style="color:#2a9a4a;font-weight:600">have fun</span> with Japanese at this point. You are <span style="color:#2a9a4a">conversationally fluent</span> for daily purposes. You can get by at the bank, hospital, post office, or looking for an apartment. In spite of the odd word that isn't quite there when you need it, you can <span style="color:#2a9a4a">always manage to get your point across</span> one way or another. You can understand <span style="color:#2a9a4a;font-weight:600">TV dramas and variety shows</span> about daily life quite well (80–90%). Unscripted shows will usually be easier than scripted dramas. Thrillers and more culturally specific content will still be hard.`,
      needToDo: `<span style="color:#e8a020;font-weight:600">Listen and read A LOT.</span> It's also a good idea to get <span style="color:#e8a020">massive input</span> in authentic Japanese media — anime, dramas, <span style="color:#e8a020">podcasts</span>, manga, novels, etc. <span style="color:#7c5cbf">Lots of reading</span> is highly recommended now if you want to be literate and care about reading. You'll want to read books aimed at elementary school children, although you don't need to stick to the lower grades. <span style="color:#2a9a4a;font-weight:600">Make friends in Japanese</span>. Join social activities in Japanese — online communities, Discord servers, language exchange partners. Set your PC, phone, and all online profiles to Japanese.`,
      learning: `By now your vocabulary <span style="color:#7c5cbf;font-weight:600">pretty much covers everything</span> you'll usually want to say during everyday conversation. If you make friends and have real conversations or watch certain shows, you'll be learning a lot of <span style="color:#7c5cbf">casual speech and slang</span>. By now your grammar knowledge covers most sentence structures, so you'll rarely learn new grammar — unless it's specific to formal registers. You'll mostly learn <span style="color:#7c5cbf;font-weight:600">specialized vocabulary</span> used in formal speech, news, literary writing, or in specific fields that interest you: business, technology, science, anime subculture.`,
    },
    {
      level: 7,
      hours: 3000,
      words: 12000,
      tagline: 'You can use Japanese for all practical purposes.',
      color: '#b8860b',
      bgColor: '#fffbf0',
      icon: '👑',
      canDo: `<span style="color:#b8860b;font-weight:600">You can understand any general content effortlessly</span> — newspapers, novels, all types of anime, dramas, and movies. You might still struggle with highly technical texts in unfamiliar fields, heavy regional dialects (Kansai-ben, Tohoku-ben), and shows with intricate cultural in-jokes or plot layers. <span style="color:#b8860b;font-weight:600">You speak fluently and effortlessly</span>, without thinking about language structure. While native speakers might still detect a slight accent, your clarity and fluency make your speech easy to understand, and no one considers you a learner anymore. You may still make occasional mistakes, but it doesn't hinder you from being an <span style="color:#b8860b">effective member of Japanese-speaking society</span>.`,
      needToDo: `<span style="color:#e8a020;font-weight:600">Listen and read A LOT.</span> Add variety to what you read and listen to. By this point it's very easy to find native Japanese media you understand extremely well — but it's also <span style="color:#e8a020">easy to get comfortable and stop seeking challenges</span>. To keep improving, simply <span style="color:#2a9a4a;font-weight:600">do things you have never done</span> before in Japanese. Try reading a book by a new author, watch a show in an unfamiliar genre, explore a topic you know nothing about. <span style="color:#2a9a4a">Try joining activities that are new to you</span>: a sports team, an improv group, a reading club, community events. If interested, now is the perfect time to explore <span style="color:#7c5cbf">classical Japanese (古文)</span>.`,
      learning: `You will continue learning <span style="color:#7c5cbf;font-weight:600">slang and cultural references</span>, and this will allow you to understand more and more cultural nuance. You can explore <span style="color:#7c5cbf">regional dialects</span> of the language, classical Japanese, or vocabulary in <span style="color:#7c5cbf">technical and scientific fields</span> you want to learn about. You will still encounter <span style="color:#7c5cbf;font-weight:600">new idioms and proverbs</span>, but they will almost always be clear from context. And of course, you can start learning your next language! 🚀`,
    },
  ];

  // ─── Helpers ───────────────────────────────────────────────────────────────

  function getInputHours() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.textContent.includes('Total lifetime study duration')) continue;
      // The time value may be in a sibling node; check parent and grandparent text
      for (let el = node.parentElement; el && el !== document.body; el = el.parentElement) {
        const m = el.textContent.match(/(\d+):(\d+):(\d+)/);
        if (m) return parseFloat(m[1]) + parseFloat(m[2]) / 60;
        if (el.textContent.length > 300) break; // don't climb too high
      }
    }
    return null;
  }

  function getCurrentLevel(hours) {
    let current = LEVELS[0];
    for (const lvl of LEVELS) {
      if (hours >= lvl.hours) current = lvl;
    }
    return current;
  }

  function getNextLevel(currentLevel) {
    return LEVELS.find(l => l.level === currentLevel.level + 1) || null;
  }

  function fmt(n) {
    return n.toLocaleString();
  }

  async function getRecentDailyRate() {
    // Approach 1: read the cumulative study time chart from Chart.js instances
    if (window.Chart) {
      try {
        const instances = Object.values(Chart.instances || {});
        for (const chart of instances) {
          const data = chart.data?.datasets?.[0]?.data;
          if (!Array.isArray(data) || data.length < 2) continue;
          const nums = data
            .map(v => (typeof v === 'object' && v !== null) ? v.y : v)
            .filter(n => typeof n === 'number');
          if (nums.length < 2) continue;
          const gained = nums[nums.length - 1] - nums[0];
          const days = nums.length - 1;
          // Cumulative hours chart: values ~50-5000, clearly increasing
          if (gained > 0 && gained < 1000 && days >= 7) return gained / days;
        }
        // Also try via canvas elements (Chart.js 3+ internal ref)
        for (const canvas of document.querySelectorAll('canvas')) {
          const chart = canvas.__chartjs__?.chart || canvas._chart;
          if (!chart) continue;
          const data = chart.data?.datasets?.[0]?.data;
          if (!Array.isArray(data) || data.length < 2) continue;
          const nums = data
            .map(v => (typeof v === 'object' && v !== null) ? v.y : v)
            .filter(n => typeof n === 'number');
          if (nums.length < 2) continue;
          const gained = nums[nums.length - 1] - nums[0];
          const days = nums.length - 1;
          if (gained > 0 && gained < 1000 && days >= 7) return gained / days;
        }
      } catch (e) {}
    }

    // Approach 2: fetch the activities API the page already calls
    try {
      const resp = await fetch('/api/v1/activities', { credentials: 'same-origin' });
      if (resp.ok) {
        const json = await resp.json();
        const list = json.data?.activities || (Array.isArray(json) ? json : []);
        const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
        let totalSeconds = 0;
        for (const item of list) {
          const ts = new Date(item.date || item.created_at || item.timestamp);
          if (!isNaN(ts) && ts.getTime() >= thirtyDaysAgo) {
            totalSeconds += item.duration || 0; // duration is in seconds
          }
        }
        if (totalSeconds > 0) return (totalSeconds / 3600) / 30;
      }
    } catch (e) {}

    return null;
  }

  // ─── Modal ─────────────────────────────────────────────────────────────────

  let modalLevelIndex = 0;

  function buildModal() {
    const overlay = document.createElement('div');
    overlay.id = 'cij-progress-modal-overlay';
    Object.assign(overlay.style, {
      display: 'none',
      position: 'fixed',
      inset: '0',
      background: 'rgba(0,0,0,0.45)',
      zIndex: '99999',
      alignItems: 'center',
      justifyContent: 'center',
    });

    const modal = document.createElement('div');
    modal.id = 'cij-progress-modal';
    Object.assign(modal.style, {
      background: '#fff',
      borderRadius: '16px',
      width: 'min(660px, 94vw)',
      maxHeight: '88vh',
      overflowY: 'auto',
      position: 'relative',
      boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    });

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    return overlay;
  }

  function renderModal(levelIndex) {
    modalLevelIndex = levelIndex;
    const lvl = LEVELS[levelIndex];
    const overlay = document.getElementById('cij-progress-modal-overlay');
    const modal = document.getElementById('cij-progress-modal');

    modal.innerHTML = `
      <div style="background:${lvl.bgColor};border-radius:16px 16px 0 0;padding:28px 32px 24px;display:flex;align-items:flex-start;gap:20px">
        <div style="width:72px;height:72px;background:${lvl.color}22;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:34px;flex-shrink:0">${lvl.icon}</div>
        <div style="flex:1">
          <div style="font-size:26px;font-weight:700;color:${lvl.color};margin-bottom:4px">Level ${lvl.level}</div>
          <div style="font-size:15px;color:#444;margin-bottom:10px">${lvl.tagline}</div>
          <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:13px;color:#666">
            <span>🕐 Hours of input: <strong>${fmt(lvl.hours)}</strong></span>
            <span>💬 Known words: <strong>${lvl.level === 7 ? '12,000+' : fmt(lvl.words)}</strong></span>
          </div>
        </div>
        <button id="cij-modal-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;padding:0;line-height:1;flex-shrink:0">×</button>
      </div>
      <div style="padding:28px 32px 8px">
        <div style="margin-bottom:20px">
          <div style="font-size:15px;font-weight:700;color:#222;margin-bottom:8px">What you can do:</div>
          <div style="font-size:14px;line-height:1.7;color:#333">${lvl.canDo}</div>
        </div>
        <div style="margin-bottom:20px">
          <div style="font-size:15px;font-weight:700;color:#222;margin-bottom:8px">What you need to do:</div>
          <div style="font-size:14px;line-height:1.7;color:#333">${lvl.needToDo}</div>
        </div>
        <div style="margin-bottom:20px">
          <div style="font-size:15px;font-weight:700;color:#222;margin-bottom:8px">What you are learning:</div>
          <div style="font-size:14px;line-height:1.7;color:#333">${lvl.learning}</div>
        </div>
      </div>
      <div style="padding:16px 32px 24px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f0f0f0">
        <button id="cij-modal-prev" style="background:none;border:none;cursor:pointer;color:${levelIndex === 0 ? '#ccc' : '#e8a020'};font-size:14px;font-weight:600;display:flex;align-items:center;gap:4px" ${levelIndex === 0 ? 'disabled' : ''}>
          ← Previous level
        </button>
        <button id="cij-modal-next" style="background:none;border:none;cursor:pointer;color:${levelIndex === LEVELS.length - 1 ? '#ccc' : '#e8a020'};font-size:14px;font-weight:600;display:flex;align-items:center;gap:4px" ${levelIndex === LEVELS.length - 1 ? 'disabled' : ''}>
          Next level →
        </button>
      </div>
    `;

    document.getElementById('cij-modal-close').addEventListener('click', closeModal);
    const prevBtn = document.getElementById('cij-modal-prev');
    const nextBtn = document.getElementById('cij-modal-next');
    if (levelIndex > 0) prevBtn.addEventListener('click', () => renderModal(levelIndex - 1));
    if (levelIndex < LEVELS.length - 1) nextBtn.addEventListener('click', () => renderModal(levelIndex + 1));

    overlay.style.display = 'flex';
    modal.scrollTop = 0;
  }

  function openModal(levelIndex) {
    renderModal(levelIndex);
  }

  function closeModal() {
    const overlay = document.getElementById('cij-progress-modal-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ─── Main Progress Section ─────────────────────────────────────────────────

  function buildProgressSection(hours, dailyRate) {
    const currentLvl = getCurrentLevel(hours);
    const nextLvl = getNextLevel(currentLvl);
    const prevLvl = LEVELS.find(l => l.level === currentLvl.level - 1) || null;

    const progressToNext = nextLvl
      ? Math.min(100, ((hours - currentLvl.hours) / (nextLvl.hours - currentLvl.hours)) * 100)
      : 100;
    const hoursToNext = nextLvl ? Math.max(0, nextLvl.hours - Math.floor(hours)) : 0;

    // ── Bar chart ──
    const maxBarHeight = 100;
    const barHeights = [14, 24, 38, 54, 72, 88, 100];
    const barsHtml = LEVELS.map((lvl, i) => {
      const isCurrent = lvl.level === currentLvl.level;
      const isUnlocked = hours >= lvl.hours;
      const h = barHeights[i];
      const color = isCurrent ? currentLvl.color : isUnlocked ? lvl.color + '66' : '#d0d0e0';
      return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">
        <div style="width:100%;max-width:36px;height:${h}px;background:${color};border-radius:4px 4px 0 0;transition:all 0.3s"></div>
      </div>`;
    }).join('');

    // ── Levels list ──
    const levelsListHtml = LEVELS.map((lvl, i) => {
      const isCurrent = lvl.level === currentLvl.level;
      const isUnlocked = hours >= lvl.hours;
      const opacity = isUnlocked ? '1' : '0.5';
      const border = isCurrent ? `2px solid ${lvl.color}` : '2px solid transparent';
      const bg = isCurrent ? lvl.bgColor : '#fff';
      return `
        <div class="cij-level-row" data-level-index="${i}" style="
          display:flex;align-items:center;gap:12px;
          padding:12px 16px;border-radius:10px;cursor:pointer;
          border:${border};background:${bg};
          opacity:${opacity};margin-bottom:8px;
          transition:background 0.15s;
        ">
          <div style="width:44px;height:44px;background:${lvl.color}22;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">${lvl.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:700;color:${isUnlocked ? lvl.color : '#888'};margin-bottom:2px">Level ${lvl.level}</div>
            <div style="font-size:12px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${lvl.tagline}</div>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px;font-size:11px;color:#888">
              <span>🕐 ${fmt(lvl.hours)} hrs</span>
              <span>💬 ${lvl.level === 7 ? '12,000+' : fmt(lvl.words)} words</span>
            </div>
          </div>
          <div style="color:#ccc;font-size:16px">›</div>
        </div>`;
    }).join('');

    const section = document.createElement('div');
    section.id = 'cij-progress-section';
    section.style.gridColumn = '1 / -1';
    section.innerHTML = `
      <div style="
        font-family:system-ui,-apple-system,sans-serif;
        background:#f4f4fb;
        border-radius:16px;
        padding:28px 24px;
        margin:0 0 24px 0;
      ">
        <h2 style="font-size:20px;font-weight:700;color:#222;margin:0 0 20px 0">My Progress</h2>

        <div style="display:flex;flex-wrap:wrap;gap:20px">

          <!-- Left: Overall Progression -->
          <div style="flex:1;min-width:260px;background:#fff;border-radius:14px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <div style="font-size:15px;font-weight:700;color:#333;margin-bottom:20px">Overall progression</div>

            <!-- Bar chart -->
            <div style="display:flex;align-items:flex-end;gap:4px;height:${maxBarHeight}px;margin-bottom:16px;padding:0 4px">
              ${barsHtml}
            </div>

            <div style="font-size:13px;color:#888;margin-bottom:4px">You are currently in</div>
            <div style="font-size:20px;font-weight:800;color:${currentLvl.color};margin-bottom:20px">Level ${currentLvl.level}</div>

            <!-- Progress bar -->
            <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:6px">
              <span>Total input time</span>
              <span style="font-weight:600">${Math.floor(hours)} hrs ${Math.round((hours % 1) * 60)} min</span>
            </div>
            <div style="background:#e8e8f4;border-radius:999px;height:8px;margin-bottom:4px;overflow:hidden">
              <div style="background:${currentLvl.color};height:100%;width:${progressToNext}%;border-radius:999px;transition:width 0.6s ease"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:#aaa;margin-bottom:16px">
              <span>${fmt(currentLvl.hours)} hrs</span>
              <span>${nextLvl ? fmt(nextLvl.hours) + ' hrs' : '✓ Max level'}</span>
            </div>

            ${nextLvl ? `
            <div style="background:#e8f4fb;border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;font-size:13px;margin-bottom:${dailyRate ? '8px' : '0'}">
              <span style="color:#3a7bbf">Hours to Level ${nextLvl.level}</span>
              <span style="font-weight:700;color:#3a7bbf">${fmt(hoursToNext)} hrs</span>
            </div>
            ${dailyRate ? `
            <div style="background:#edf7ed;border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;font-size:13px">
              <span style="color:#3a7a4a">At your current pace (${dailyRate.toFixed(1)} hrs/day)</span>
              <span style="font-weight:700;color:#3a7a4a">~${Math.ceil(hoursToNext / dailyRate)} days</span>
            </div>` : ''}` : `
            <div style="background:#e8fbf0;border-radius:8px;padding:10px 14px;text-align:center;font-size:13px;color:#2a9a4a;font-weight:600">
              🎉 You've reached the highest level!
            </div>`}
          </div>

          <!-- Right: Levels List -->
          <div style="flex:1;min-width:280px;background:#fff;border-radius:14px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <div style="font-size:15px;font-weight:700;color:#333;margin-bottom:16px">Levels</div>
            <div id="cij-levels-list">
              ${levelsListHtml}
            </div>
          </div>

        </div>
      </div>
    `;

    // Wire level row clicks
    section.querySelectorAll('.cij-level-row').forEach(row => {
      row.addEventListener('click', () => {
        openModal(parseInt(row.dataset.levelIndex, 10));
      });
      row.addEventListener('mouseenter', () => {
        row.style.background = row.style.background === 'rgb(255, 255, 255)' || !row.style.background
          ? '#f8f8fe'
          : row.style.background;
      });
    });

    return section;
  }

  // ─── Injection ─────────────────────────────────────────────────────────────

  async function inject() {
    if (document.getElementById('cij-progress-section')) return true;

    const hours = getInputHours();
    if (hours === null) return false;

    const main = document.querySelector('main');
    if (!main) return false;

    const dailyRate = await getRecentDailyRate();
    const section = buildProgressSection(hours, dailyRate);
    buildModal();

    // Insert before the first <section> (just after the Dashboard heading row)
    const firstSection = main.querySelector('section');
    if (firstSection) {
      firstSection.before(section);
    } else {
      main.prepend(section);
    }

    return true;
  }

  // Poll until the hours element appears in the DOM (Svelte may render async)
  let attempts = 0;
  let injecting = false;
  const maxAttempts = 600; // 30 seconds at 50ms
  const timer = setInterval(async () => {
    if (injecting) return;
    attempts++;
    injecting = true;
    const done = await inject();
    injecting = false;
    if (done || attempts >= maxAttempts) clearInterval(timer);
  }, 50);

})();
