/* Main site script: Q&A, Blog, Profile, and navigation */

(function () {
  "use strict";

  // ------------------------------
  // Data
  // ------------------------------
  const qaItems = [
    {
      question: "Question 1",
      fullquestion:
        "Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.",
      answer:
        "<p>I use HTML and CSS, and Javascript for the site's interface and design and javascript for the sites functionalities.</p>",
    },
    {
      question: "Question 2",
      fullquestion:
        "What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.",
      answer:
        "<p>The service was very user-friendly, and I appreciated how simple it is to connect my GitHub repository to NEtlify and get the site deployed quickly.</p>\n\
<p>Most of the Netlify features are straightforward and easy to understand. One thing that really impress me is the fact that it is very easy to use. However, error messages during build process is quite challenging maybe having it more detailed so that fixing issues could have been easier. Thank you.</p>",
    },
    {
      question: "Question 3",
      fullquestion:
        "Rank your 5 favorite and 5 least favorite activities from this list: https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab",
      answer:
        "<h4>✅ Top 5 Favorite Activities:</h4>\n\
          <ul>\n\
          <li>Respond to 20+ support requests via email every day</li>\n\
          <li>Work with a customer to figure out if Netlify's service can solve a particular workflow or integration challenge they have</li>\n\
          <li>Dig through server logs to troubleshoot a customer's website behavior</li>\n\
          <li>Debug a customer's build using a programming language and framework that you've never seen before</li>\n\
          <li>Write and maintain Support Guides for our product</li>\n\
          </ul>\n\
          <h4>❌ Bottom 5 Least Favorite Activities:</h4>\n\
          <ul>\n\
          <li>Help manage communications during a service outage</li>\n\
          <li>Respond to Netlify customers on Twitter</li>\n\
          <li>Join a Zoom call with a VIP customer you have been helping via email, upon their request</li>\n\
          <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>\n\
          <li>Manage a Support team</li>\n\
          </ul>",
    },
    {
      question: "Question 4",
      fullquestion:
        "Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.",
      answer:
        "<p>A good example of well-made technical documentation is Stripe’s API documentation. It’s easy to navigate, clearly written, and gives practical examples that show how to use each feature. <br><br>What makes it really useful is how it explains things in a simple way without leaving out important details. It also includes code samples in different languages, so developers can quickly copy and test them. Overall, it makes working with the API much easier, even for someone who is new to it.</p>",
    },
    {
      question: "Question 5",
      fullquestion:
        "Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.",
      answer:
        "<p>One major challenge for less-technical customers is understanding how DNS works. Terms like A record, CNAME, TTL or MX can be confusing, and even a small mistake such as pointing to the wrong IP address can cause a website or email service to stop working.</p>\n\
<p>Another common issue is DNS propagation. When changes are made to DNS settings, the updates do not take effect immediately. It can take several hours for the changes to spread across the internet, which often leads to confusion or concern, even when the configuration is correct.</p>",
    },
    {
      question: "Question 6",
      fullquestion:
        "A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.",
      answer:
        "<p>Since the error only says “Build script returned non-zero exit code: 2,” and I can’t access the site’s code, my first step would be to review the full build logs for any extra clues. Often, there are warnings or error messages just before the failure that can point to what went wrong. <br><br> I would also check the build settings in the dashboard, such as the build command, environment variables, and any recent changes that could affect the build. Since I can’t run the build myself, I would focus on guiding the customer to test things on their side and help them narrow down the issue.</p>\n\
<p><strong>This will be my best customer-facing first response:</strong></p>\n\
<p>Hi there,</p>\n\
<p>Thanks for reaching out. I checked your build logs and saw this error:</p>\n\
<p>“Build script returned non-zero exit code: 2.”</p>\n\
<p>This means the build process ran into a problem and could not complete. To help figure out what’s causing it, here are a few things you can check:</p>\n\
<ul>\n\
<li>Have you made any recent changes to your code, build script, or dependencies?</li>\n\
<li>Can you try running the build locally to see if the same error happens?</li>\n\
<li>Please double-check your build command and environment settings in your dashboard.</li>\n\
</ul>\n\
<p>If you can share more details from the build logs or any changes you’ve made recently, I’ll be happy to take another look.</p>\n\
<p>Best,<br/>Wing</p>",
    },
    {
      question: "Question 7",
      fullquestion:
        "How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site!",
      answer:
        "<p>To set up an HTTP 301 redirect from <code>/netlify/anything</code> to <code>https://www.google.com/search?q=anything</code>, I use a redirect rule with a placeholder for the dynamic part (<code>:splat</code>). Here’s how i would format this using <code>_redirects</code> file:</p>\n\
<pre><code>/netlify/*  https://www.google.com/search?q=:splat  301</code></pre>\n\
<p>For a proxy redirect (where the browser URL stays the same, but the content is fetched from Google), I use a 200 status code. HEre is my _redirect rule syntax :</p>\n\
<pre><code>/netlify/*  https://www.google.com/search?q=:splat  200</code></pre>",
    },
    {
      question: "Question 8",
      fullquestion:
        'Please attempt to deploy a function on our service. This need not be complicated. It could be "Hello World". Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.',
      answer:
        "<p>I used GitHub Codespaces to create and set up a simple &quot;Hello World&quot; function. The function was committed to a GitHub repository and deployed using Netlify’s CI/CD integration. I did not encounter any issues during the process. The function worked as expected, and I was able to access it successfully after deployment.</p>",
    },
    {
      question: "Question 9",
      fullquestion:
        "We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?",
      answer:
        "<p>If I received a report of a serious security issue, I would take it seriously right away. I’d review the details to understand what the issue might be and gather any clues from logs or public-facing systems. Even if I couldn’t confirm it, I’d flag it to the security team immediately and share everything I know so they can investigate further. If the issue seems big and possibly real, I would make sure it’s treated as high priority and escalated quickly.</p>\n\
<p><strong>This will be my response to the reporter:</strong></p>\n\
        <p>Hi there,</p>\n\
<p>Thank you for reporting this. We take security very seriously at Netlify, and I appreciate you bringing this to our attention.</p>\n\
<p>I’ve shared your report with our security team, and they’re looking into it now. We’ll follow up with any updates. If you have more details that can help us investigate, please feel free to share.</p>\n\
<p>Thanks again for reaching out.</p>\n\
<p>Best,<br/>Wing</p>",
    },
  ];

  // ------------------------------
  // Utilities
  // ------------------------------
  function setText(element, text) {
    if (element) element.textContent = text;
  }

  function setHTML(element, html) {
    if (element) element.innerHTML = html;
  }

  function createElement(tagName, className, attrs = {}) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    for (const [key, value] of Object.entries(attrs)) {
      if (key === "text") el.textContent = value;
      else if (key === "html") el.innerHTML = value;
      else el.setAttribute(key, String(value));
    }
    return el;
  }

  // ------------------------------
  // Navigation between sections (only if present)
  // ------------------------------
  function initializeNavigation() {
    const navButtons = Array.from(
      document.querySelectorAll(".site-nav .nav-btn")
    );
    if (navButtons.length === 0) return;

    navButtons.forEach((btn) => {
      btn.addEventListener("click", (evt) => {
        const section = btn.getAttribute("data-section");
        if (!section) return; // ignore plain links in profile.html

        evt.preventDefault();
        const targetId = `section-${section}`;
        const target = document.getElementById(targetId);
        if (!target) return;

        // toggle active button state
        navButtons.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          if (b.hasAttribute("aria-pressed")) {
            b.setAttribute("aria-pressed", b === btn ? "true" : "false");
          }
        });

        // toggle sections
        const sections = [
          document.getElementById("section-qa"),
          document.getElementById("section-blog"),
          document.getElementById("section-profile"),
        ].filter(Boolean);

        sections.forEach((sec) => {
          const isActive = sec === target;
          sec.classList.toggle("is-active", isActive);
          if (isActive) sec.removeAttribute("hidden");
          else sec.setAttribute("hidden", "");
        });
      });
    });
  }

  // ------------------------------
  // Q&A Tabs (defensive: run only if containers exist)
  // ------------------------------
  function initializeQaTabs() {
    const tablist = document.getElementById("qa-tablist");
    const panel = document.getElementById("qa-panel");
    if (!tablist || !panel) return;

    // Render tabs
    tablist.innerHTML = "";
    qaItems.forEach((item, index) => {
      const tab = createElement("button", "qa-tab", {
        role: "tab",
        id: `qa-tab-${index}`,
        "aria-selected": index === 0 ? "true" : "false",
        "aria-controls": "qa-panel",
        "data-index": String(index),
      });

      const indexBadge = createElement("span", "q-index", {
        text: String(index + 1),
      });
      const label = createElement("span", "q-label", { text: item.question });
      tab.appendChild(indexBadge);
      tab.appendChild(label);
      tablist.appendChild(tab);
    });

    function renderAnswer(activeIndex) {
      const item = qaItems[activeIndex];
      if (!item) return;
      panel.innerHTML = "";
      const q = createElement("h3", "qa-question", { text: item.fullquestion });
      const a = createElement("div", "qa-answer", {
        html: String(item.answer),
      });
      panel.appendChild(q);
      panel.appendChild(a);
    }

    function setActiveTab(nextIndex, { focus } = { focus: true }) {
      const tabs = Array.from(tablist.querySelectorAll(".qa-tab"));
      tabs.forEach((t, i) => {
        t.setAttribute("aria-selected", i === nextIndex ? "true" : "false");
      });
      renderAnswer(nextIndex);
      if (focus) {
        const nextTab = tabs[nextIndex];
        if (nextTab) nextTab.focus();
      }
    }

    // Initial render
    renderAnswer(0);

    // Click
    tablist.addEventListener("click", (e) => {
      const target = e.target.closest(".qa-tab");
      if (!target) return;
      const index = Number(target.getAttribute("data-index"));
      setActiveTab(index, { focus: false });
    });

    // Keyboard navigation
    tablist.addEventListener("keydown", (e) => {
      const tabs = Array.from(tablist.querySelectorAll(".qa-tab"));
      const currentIndex = tabs.findIndex(
        (t) => t.getAttribute("aria-selected") === "true"
      );
      if (currentIndex < 0) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = (currentIndex + 1) % tabs.length;
        setActiveTab(next);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(prev);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveTab(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveTab(tabs.length - 1);
      } else if (e.key === "Enter" || e.key === " ") {
        // Already handled by aria-selected, but prevent scroll on Space
        e.preventDefault();
      }
    });
  }

  // ------------------------------
  // Blog list + post view
  // ------------------------------
  function initializeBlog() {
    const list = document.getElementById("blog-list");
    const post = document.getElementById("blog-post");
    if (!list || !post) return;

    function showList() {
      post.setAttribute("hidden", "");
      list.removeAttribute("hidden");
    }
    function showPost(postId) {
      const item = blogPosts.find((p) => p.id === postId);
      if (!item) return;
      list.setAttribute("hidden", "");
      post.removeAttribute("hidden");
      post.innerHTML = "";
      const back = createElement("a", "back", {
        href: "#",
        text: "← Back to list",
      });
      const title = createElement("h3", null, { text: item.title });
      const article = createElement("div", "content", { html: item.content });
      back.addEventListener("click", (e) => {
        e.preventDefault();
        showList();
      });
      post.appendChild(back);
      post.appendChild(title);
      post.appendChild(article);
    }

    // initial list render
    list.innerHTML = "";
    blogPosts.forEach((p) => {
      const card = createElement("article", "blog-card", { tabindex: "0" });
      const h3 = createElement("h3", null, { text: p.title });
      const summary = createElement("p", null, { text: p.summary });
      card.appendChild(h3);
      card.appendChild(summary);
      card.addEventListener("click", () => showPost(p.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showPost(p.id);
        }
      });
      list.appendChild(card);
    });

    showList();
  }

  // ------------------------------
  // Profile population
  // ------------------------------
  function initializeProfile() {
    const nameEl = document.getElementById("profile-name");
    const taglineEl = document.getElementById("profile-tagline");
    const aboutEl = document.getElementById("profile-about");
    const linksEl = document.getElementById("profile-links");
    const avatarEl = document.getElementById("profile-avatar");

    if (!nameEl && !taglineEl && !aboutEl && !linksEl && !avatarEl) return;

    setText(nameEl, profileData.name);
    setText(taglineEl, profileData.tagline);
    setText(aboutEl, profileData.about);

    if (avatarEl && profileData.name) {
      const initial = profileData.name.trim().charAt(0).toUpperCase();
      avatarEl.textContent = initial || "A";
    }

    if (linksEl) {
      linksEl.innerHTML = "";
      profileData.links.forEach((l) => {
        const a = createElement("a", "profile-link", { href: l.href });
        const text = document.createTextNode(l.label);
        a.appendChild(text);
        linksEl.appendChild(a);
      });
    }
  }

  // ------------------------------
  // Footer year (index.html)
  // ------------------------------
  function initializeYear() {
    const year = document.getElementById("year");
    if (year) setText(year, String(new Date().getFullYear()));
  }

  // ------------------------------
  // Boot
  // ------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initializeNavigation();
    initializeQaTabs();
    initializeBlog();
    initializeProfile();
    initializeYear();

    const yearEl = document.getElementById("year-profile");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Smooth scroll + focus for in-page navigation (About -> #hero, Assessment Questions -> #q&a, Contact -> #contact)
    const navLinks = Array.from(
      document.querySelectorAll('.site-nav .nav-btn[href^="#"]')
    );

    function normalizeHash(hash) {
      if (!hash) return "";
      // Ensure it starts with '#', then decode any entities
      const h = hash.startsWith("#") ? hash : `#${hash}`;
      return `#${decodeURIComponent(h.slice(1))}`;
    }

    function setActiveNavByHash(hash) {
      const normalized = normalizeHash(hash || window.location.hash);
      navLinks.forEach((link) => {
        const linkHash = normalizeHash(link.getAttribute("href") || "");
        link.classList.toggle("is-active", linkHash === normalized);
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const rawHref = link.getAttribute("href") || "";
        if (!rawHref.startsWith("#")) return; // external link, ignore
        e.preventDefault();

        const hash = normalizeHash(rawHref);
        const targetId = hash.slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        // Smooth scroll to the section
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

        // Ensure focus lands on the section for accessibility
        const prevTabIndex = targetEl.getAttribute("tabindex");
        if (prevTabIndex === null) {
          targetEl.setAttribute("tabindex", "-1");
        }
        setTimeout(() => {
          targetEl.focus({ preventScroll: true });
          if (prevTabIndex === null) {
            targetEl.addEventListener("blur", function handleBlur() {
              targetEl.removeAttribute("tabindex");
              targetEl.removeEventListener("blur", handleBlur);
            });
          }
        }, 200);

        // Update URL hash without jump and set active state
        if (history.pushState) {
          history.pushState(null, "", hash);
        } else {
          location.hash = hash;
        }
        setActiveNavByHash(hash);
      });
    });

    // Handle back/forward navigation and initial load
    window.addEventListener("hashchange", () =>
      setActiveNavByHash(window.location.hash)
    );
    setActiveNavByHash(window.location.hash || "#hero");
  });
})();
