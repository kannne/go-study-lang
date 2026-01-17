/**
 * API Fetch Wrapper
 *
 * - 모든 요청에 credentials: 'include' 자동 추가 (쿠키 전송)
 * - 401 에러 시 자동으로 Refresh Token으로 Access Token 갱신
 * - 갱신 성공 시 원래 요청 재시도
 * - 갱신 실패 시 로그인 페이지로 리다이렉트
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4041';

interface FetchOptions extends RequestInit {
  skipRefresh?: boolean; // Refresh API 호출 시 무한 루프 방지
}

/**
 * Refresh Token으로 Access Token 갱신
 */
async function refreshAccessToken(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'GET',
      credentials: 'include', // Refresh Token 쿠키 포함
    });

    if (response.ok) {
      console.log('[Auth] Access Token 갱신 성공');
      return true;
    } else {
      console.error('[Auth] Refresh Token 만료 또는 유효하지 않음');
      return false;
    }
  } catch (error) {
    console.error('[Auth] Refresh Token 갱신 에러:', error);
    return false;
  }
}

/**
 * API Fetch Wrapper
 */
export async function apiFetch<T = unknown>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { skipRefresh = false, ...fetchOptions } = options;

  // 기본 옵션 설정
  const defaultOptions: RequestInit = {
    credentials: 'include', // 쿠키 포함
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  };

  // 첫 번째 요청
  let response = await fetch(`${API_BASE_URL}${url}`, defaultOptions);

  // 401 에러 (Unauthorized) && Refresh 스킵 안 함
  if (response.status === 401 && !skipRefresh) {
    console.log('[Auth] Access Token 갱신 시도...');

    // Refresh Token으로 갱신
    const refreshed = await refreshAccessToken();

    if (refreshed) {
      // 갱신 성공 → 원래 요청 재시도
      console.log('[Auth] 원래 요청 재시도...');
      response = await fetch(`${API_BASE_URL}${url}`, defaultOptions);
    } else {
      // 갱신 실패 → 로그인 페이지로
      console.error('[Auth] 토큰 갱신 실패, 로그인 필요');
      localStorage.removeItem('user');
      // 클라이언트 사이드에서만 리다이렉트
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      throw new Error('Authentication failed');
    }
  }

  // 응답 처리
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  // JSON 응답 반환
  return response.json();
}

/**
 * 로그아웃
 */
export async function logout(): Promise<void> {
  try {
    await apiFetch('/auth/logout', { skipRefresh: true });
    localStorage.removeItem('user');
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  } catch (error) {
    console.error('로그아웃 에러:', error);
    // 에러가 나도 로컬 정보는 삭제
    localStorage.removeItem('user');
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }
}
