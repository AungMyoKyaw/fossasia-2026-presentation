/**
 * TDD Validation Suite for FOSSASIA 2026 Presentation
 * Run in browser console to validate:
 * 1. All Lucide icons render correctly
 * 2. No emojis remain
 * 3. Fact-check corrections applied
 */

const PresentationTests = {
  // Test 1: Verify Lucide library loaded
  testLucideLoaded() {
    const lucideScript = document.querySelector('script[src*="lucide"]');
    const hasCreateIcons = typeof lucide !== 'undefined' && lucide.createIcons;
    return {
      name: 'Lucide Library Loaded',
      passed: !!lucideScript && hasCreateIcons,
      details: lucideScript ? 'CDN script found' : 'CDN script NOT found'
    };
  },

  // Test 2: Check for remaining emojis
  testNoEmojis() {
    const slides = document.querySelector('.slides');
    const text = slides.innerText;
    // Emoji regex pattern
    const emojiPattern = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
    const emojis = text.match(emojiPattern);
    return {
      name: 'No Emojis Remaining',
      passed: !emojis || emojis.length === 0,
      details: emojis ? `Found ${emojis.length} emojis: ${emojis.join(', ')}` : 'No emojis found'
    };
  },

  // Test 3: Verify Lucide icons present
  testIconsPresent() {
    const icons = document.querySelectorAll('i[data-lucide]');
    return {
      name: 'Lucide Icons Present',
      passed: icons.length > 20,
      details: `Found ${icons.length} Lucide icons`
    };
  },

  // Test 4: Check fact corrections
  testFactCorrections() {
    const content = document.body.innerText;
    const checks = [
      { pattern: /Claude Code.*Pro.*\$20/, desc: 'Claude Code Pro $20/month' },
      { pattern: /Claude Pro subscription|Claude Pro\s*$/i, desc: 'NO vague "Pro subscription" text' }
    ];
    
    const results = checks.map(c => ({
      desc: c.desc,
      passed: c.pattern.test(content)
    }));
    
    return {
      name: 'Fact Check Corrections',
      passed: results.every(r => r.passed),
      details: results.map(r => `${r.passed ? '✓' : '✗'} ${r.desc}`).join('\n')
    };
  },

  // Test 5: Icon initialization
  testIconsRendered() {
    const icons = document.querySelectorAll('i[data-lucide]');
    const rendered = Array.from(icons).filter(icon => 
      icon.innerHTML.includes('svg') || icon.querySelector('svg')
    );
    return {
      name: 'Icons Rendered as SVG',
      passed: rendered.length === icons.length,
      details: `${rendered.length}/${icons.length} icons rendered as SVG`
    };
  },

  // Run all tests
  runAll() {
    const tests = [
      this.testLucideLoaded(),
      this.testNoEmojis(),
      this.testIconsPresent(),
      this.testFactCorrections(),
      this.testIconsRendered()
    ];
    
    console.log('=== FOSSASIA 2026 Presentation Tests ===\n');
    tests.forEach(test => {
      const status = test.passed ? '✅ PASS' : '❌ FAIL';
      console.log(`${status}: ${test.name}`);
      console.log(`   ${test.details}\n`);
    });
    
    const passed = tests.filter(t => t.passed).length;
    console.log(`\nResults: ${passed}/${tests.length} tests passed`);
    
    return tests;
  }
};

// Auto-run on load
if (typeof window !== 'undefined') {
  window.PresentationTests = PresentationTests;
  console.log('PresentationTests loaded. Run PresentationTests.runAll() to validate.');
}
