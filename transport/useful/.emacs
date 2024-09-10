(modify-frame-parameters nil '((wait-for-wm . nil)))
;;(set-default-font "-adobe-courier-medium-r-normal--18-180-75-75-m-110-iso8859-1")

(put 'narrow-to-region 'disabled nil)

;;; Customizations go in emacs.d
(add-to-list 'load-path "~/emacs.d")

;; Tab using spaces
(setq-default indent-tabs-mode nil)

;;; Display column numbers
(column-number-mode 1)

;;; Better buffer switching
(iswitchb-mode 1)

;;; Use font-lock-mode
(global-font-lock-mode 1)

;; default to better frame titles
(setq frame-title-format (concat  "%b - emacs@" system-name))

;;; Pretty colors
;;(set-default-font "-outline-Lucida Console-normal-r-normal-normal-13-78-120-120-c-*-iso10646-1")
;;(set-background-color "black")
;;(set-foreground-color "green")
;;(set-cursor-color "green")
;; Frames
;;(add-to-list 'default-frame-alist '(font . "-outline-Lucida Console-normal-r-normal-normal-13-78-120-120-c-*-iso10646-1"))
;;(add-to-list 'default-frame-alist '(background-color . "black"))
;;(add-to-list 'default-frame-alist '(foreground-color . "green"))
(custom-set-variables
  ;; custom-set-variables was added by Custom.
  ;; If you edit it by hand, you could mess it up, so be careful.
  ;; Your init file should contain only one such instance.
  ;; If there is more than one, they won't work right.
 '(inhibit-startup-screen t))
(custom-set-faces
  ;; custom-set-faces was added by Custom.
  ;; If you edit it by hand, you could mess it up, so be careful.
  ;; Your init file should contain only one such instance.
  ;; If there is more than one, they won't work right.
 )

;;; Use a wide window: put comments further right
(setq-default comment-column 65)

(define-key ctl-x-map "l" 'goto-line)

