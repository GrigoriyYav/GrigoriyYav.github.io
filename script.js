var $tabs = function (target) {
    var
      _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
      _eventTabsShow,
      _showTab = function (tabsLinkTarget) {
        var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs_link_active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs_pane_show');
        // если следующая вкладка равна активной, то завершаем работу
        if (tabsLinkTarget === tabsLinkActive) {
          return;
        }
        // удаляем классы у текущих активных элементов
        if (tabsLinkActive !== null) {
          tabsLinkActive.classList.remove('tabs_link_active');
        }
        if (tabsPaneShow !== null) {
          tabsPaneShow.classList.remove('tabs_pane_show');
        }
        // добавляем классы к элементам (в завимости от выбранной вкладки)
        tabsLinkTarget.classList.add('tabs_link_active');
        tabsPaneTarget.classList.add('tabs_pane_show');
        document.dispatchEvent(_eventTabsShow);
      },
      _switchTabTo = function (tabsLinkIndex) {
        var tabsLinks = _elemTabs.querySelectorAll('.tabs_link');
        if (tabsLinks.length > 0) {
          if (tabsLinkIndex > tabsLinks.length) {
            tabsLinkIndex = tabsLinks.length;
          } else if (tabsLinkIndex < 1) {
            tabsLinkIndex = 1;
          }
          _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
      };
    
    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
    
    _elemTabs.addEventListener('click', function (e) {
      var tabsLinkTarget = e.target;
      // завершаем выполнение функции, если кликнули не по ссылке
      if (!tabsLinkTarget.classList.contains('tabs_link')) {
        return;
      }
      // отменяем стандартное действие
      e.preventDefault();
      _showTab(tabsLinkTarget);
    });
    
    return {
      showTab: function (target) {
        _showTab(target);
      },
      switchTabTo: function (index) {
        _switchTabTo(index);
      }
    }
    
    };
    
    $tabs('.tabs');

    
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------


    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    //-----------------------------------------------------------------
    //Check cookie
    $(document).ready(function(){
      console.log("ok");
      console.log($.cookie("username"));
       if ($.cookie("username") != null) {
         console.log("ok");
         //Fill in the value of username stored in the cookie to input#username
         $("#username").val($.cookie("username"));
         //Fill in the username value stored in the cookie to input#password
         $("#password").val($.cookie("password"));

         $("#login_name").val($.cookie("username"));

         document.getElementById("button_login").style.background = "#ffffff";
         document.getElementById("button_login").style.color = "#E5261E";
         document.getElementById("button_login").textContent = "Выйти";
         //Keep the "remember me" checkbox selected
         $('input:checkbox').attr("checked", true);
       }
    });
    
    function myLogin(){
      username = $('#username').val(); //username
      password = $('#password').val();
            
      document.getElementById("button_login").style.background = "#ffffff";
      document.getElementById("button_login").style.color = "#E5261E";
      $("#login_name").val(username);
      document.getElementById("button_login").textContent = "Выйти";

      remember = $('#remember').is(':checked') ? 1 : 0;
      //If "Remember that I was selected, save name and password information"
      if (remember == 1) {
        $.cookie("username", username, {
          expires: 7
        });
        $.cookie("password", password, {
          expires: 7
        });
        console.log($.cookie("username"));

        $("#login_name").val($.cookie("username"));
        
        //If "Remember that I was not selected, then remove the previously saved information."
      } else {
        $.removeCookie('username');
        $.removeCookie('password');
      }
    }