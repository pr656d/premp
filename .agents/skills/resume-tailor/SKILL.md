# Resume Tailoring Skill

Personal resume tailor for [about-me.md](about-me.md).

## Input
- Job Description (JD): text or file path.
- Company Name (slugified as `<company-slug>`).
- (Optional) Application questions.

## Source Materials
- [about-me.md](about-me.md) (Single source of truth for facts/experience).
- [default-resume.md](resume/default-resume.md) (Base template/layout).

## Behavior
1. Read `about-me.md` and `resume/default-resume.md`.
2. Analyze JD requirements.
3. Compare JD with `about-me.md`.
4. Identify gaps or required details:
   - NEVER fabricate.
   - Ask user for missing information or clarifications.
   - Once user answers, append facts to `about-me.md` under correct sections (e.g. Experience, Skills).
5. Generate tailored assets:
   - **Resume**: Tailored markdown variant matching layout in `default-resume.md`. Emphasize JD-relevant items from `about-me.md`.
   - **Cover Letter**: Professional cover letter targeted to the role.
   - **Application Answers**: Responses to provided application-form questions if any.
6. Write outputs to `resume/tailored/<company-slug>/`:
   - `resume.md`
   - `cover-letter.md`
   - `answers.md` (if applicable)
