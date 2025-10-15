포트폴리오 사이트(Next.js + Tailwind + Vercel)

## 로컬 실행

```bash
npm run dev
```

## GitHub → Vercel 배포

1. GitHub 리포지토리 생성 후 소스 푸시
2. Vercel에서 New Project → GitHub 연결 → `portfolio` 선택
3. Framework: Next.js, Root: `/` 기본값
4. 배포 후 도메인 연결. 아래 값을 실제 도메인으로 교체:
   - `src/app/layout.tsx`의 `metadataBase`
   - `public/robots.txt`의 `Sitemap`
   - `src/app/sitemap.ts`의 `base`

## 커스터마이즈 포인트
- 연락처 링크(`src/components/Contact.tsx`)
- 이력서 PDF(`public/mj_resume.pdf`) 업로드 후 링크 유지
- 프로젝트/경력 데이터(`src/contents/profile.ts`)
