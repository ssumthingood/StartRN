APP dev study

\*REACTNATIVE

\*IOS

\*WEBVIEW IN ANDROID
주소 입력 시 웹뷰를 통한 페이지 출력 예제
https://jhshjs.tistory.com/57

1. AndroidManifest.xml
   <?xml version="1.0" encoding="utf-8"?>
   <manifest xmlns:android="http://schemas.android.com/apk/res/android"
       package="com.example.myapplication">

<uses-permission android:name="android.permission.INTERNET" />

<application>
        ...중략... 
    </application>

</manifest>

2. activity_main.xml
   <?xml version="1.0" encoding="utf-8"?>
   <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:orientation="vertical"
       android:focusable="true"
       android:focusableInTouchMode="true">

<!-- +추가> 주소 입력창 -->

<EditText
        android:id="@+id/urlEt"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="주소를 입력하세요."
        android:inputType="textUri"/>

<!-- 웹뷰 및 로딩바 -->

<FrameLayout
        android:layout_width="match_parent"
        android:layout_height="0dp" android:layout_weight="1">
        <WebView
            android:id="@+id/wView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        <ProgressBar
            android:id="@+id/pBar"
            style="?android:attr/progressBarStyle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center" />
    </FrameLayout>

</LinearLayout>
웹뷰(WebView)와 로딩바(ProgressBar)를 만들고

- 상단에 주소입력창(EditText)을 추가

최상단 LinearLayout을 보면
focusable과 focusableInTouchMode 가 설정되어 있다.

EditText는 기본적으로 시작할 때 자동으로 포커스가 지정되어 키보드가 올라온다.
자동 포커스를 막아주기 위해서 상위 레이아웃에 포커스를 준 것이다.
android:focusable="true"
android:focusableInTouchMode="true"

3. MainActivity.java

public class MainActivity extends AppCompatActivity {

WebView wView;      // 웹뷰
    ProgressBar pBar;   // 로딩바
    EditText urlEt;     // +추가> 주소 입력창

@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

wView = findViewById(R.id.wView);   // 웹뷰
        pBar =  findViewById(R.id.pBar);    // 로딩바
        pBar.setVisibility(View.GONE);      // 로딩바 가리기 (로딩때만 보여야 함)

initWebView();                      // 웹뷰 초기화

// +추가> 주소 입력창 (주소 입력 -> 키보드 엔터 -> 해당 웹사이트 접속)
        urlEt = findViewById(R.id.urlEt);
        urlEt.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
                if(actionId == EditorInfo.IME_ACTION_DONE){                  // 키보드의 엔터키를 눌러서
                    wView.loadUrl("https://"+urlEt.getText().toString()+""); // 입력한 주소 접속
                }
                return false;
            }
        });
    }

// 웹뷰 초기화 함수
    public void initWebView(){
        // 1. 웹뷰클라이언트 연결 (로딩 시작/끝 받아오기)
        wView.setWebViewClient(new WebViewClient(){
            @Override                                   // 1) 로딩 시작
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                pBar.setVisibility(View.VISIBLE);       // 로딩이 시작되면 로딩바 보이기
            }
            @Override                                   // 2) 로딩 끝
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                pBar.setVisibility(View.GONE);          // 로딩이 끝나면 로딩바 없애기
            }
            @Override                                   // 3) 외부 브라우저가 아닌 웹뷰 자체에서 url 호출
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }
        });
        // 2. WebSettings: 웹뷰의 각종 설정을 정할 수 있다.
        WebSettings ws = wView.getSettings();
        ws.setJavaScriptEnabled(true); // 자바스크립트 사용 허가
        // 3. 웹페이지 호출
        wView.loadUrl("https://jhshjs.tistory.com/");
    }

// 뒤로가기 동작 컨트롤
    @Override
    public void onBackPressed() {
        if(wView.canGoBack()){      // 이전 페이지가 존재하면
            wView.goBack();         // 이전 페이지로 돌아가고
        }else{
            super.onBackPressed();  // 없으면 앱 종료
        }
    }
}

마지막에 onBackPressed() 부분을 확인하자.
뒤로가기 버튼 처리를 해주지 않으면 
웹페이지에서 뒤로가기가 안 되고 앱이 종료된다.
.canGoBack()
.goBack()

\*.ics file IMPORT IN ANDROID
