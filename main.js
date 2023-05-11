(function ($) {
  "use strict";

  function renderTable(files) {
    var svgList =
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="20" height="4" rx="2" transform="matrix(-1 0 0 1 20 0)" fill="currentColor"/>' +
      '<rect width="20" height="4" rx="2" transform="matrix(-1 0 0 1 20 8)" fill="currentColor"/>' +
      '<rect width="20" height="4" rx="2" transform="matrix(-1 0 0 1 20 16)" fill="currentColor"/>' +
      "</svg>";
    var svgGrid =
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 0C18.8807 0 20 1.11929 20 2.5V6.25C20 7.63071 18.8807 8.75 17.5 8.75H13.75C12.3693 8.75 11.25 7.63071 11.25 6.25V2.5C11.25 1.11929 12.3693 0 13.75 0H17.5Z" fill="currentColor"/>' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 0C7.63071 0 8.75 1.11929 8.75 2.5V6.25C8.75 7.63071 7.63071 8.75 6.25 8.75H2.5C1.11929 8.75 0 7.63071 0 6.25V2.5C0 1.11929 1.11929 0 2.5 0H6.25Z" fill="currentColor"/>' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 11.25C7.63071 11.25 8.75 12.3693 8.75 13.75V17.5C8.75 18.8807 7.63071 20 6.25 20H2.5C1.11929 20 0 18.8807 0 17.5V13.75C0 12.3693 1.11929 11.25 2.5 11.25H6.25Z" fill="currentColor"/>' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.25C18.8807 11.25 20 12.3693 20 13.75V17.5C20 18.8807 18.8807 20 17.5 20H13.75C12.3693 20 11.25 18.8807 11.25 17.5V13.75C11.25 12.3693 12.3693 11.25 13.75 11.25H17.5Z" fill="currentColor"/>' +
      "</svg>";

    $("#tableCatFolders").DataTable({
      data: files,
      columns: [
        { data: "title" },
        { data: "type" },
        { data: "size" },
        { data: "modified" },
        {
          data: "link",
          render: function (link) {
            return '<a href="' + link + '">Download</a>';
          },
        },
      ],
      language: {
        searchPlaceholder: "Search by title...",
        lengthMenu: "Items per page _MENU_",
        info: "_START_ - _END_ of _TOTAL_",
        paginate: {
          next:
            '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M1 1.5L6 7L1 12.5" stroke="currentColor" stroke-width="1.5"/>' +
            "</svg>",
          previous:
            '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M7 1.5L2 7L7 12.5" stroke="currentColor" stroke-width="1.5"/>' +
            "</svg>",
        },
      },
      pageLength: 10,
      autoWidth: false,

      sDom: '<"cf-table__top"f <"cf-options" <"cf-options__list"> <"cf-options__grid">>>rt<"cf-table__bottom" lip>',
    });
    //add icon controls
    $(".cf-options__list").append(svgList).addClass("active");
    $(".cf-options__grid").append(svgGrid);
  }

  function changeTableStyle() {
    $(".cf-options__list").click(function () {
      $(this).addClass("active");
      $(".cf-options__grid").removeClass("active");
      $(".cf-table").removeClass("cf-table-grid");
    });
    $(".cf-options__grid").click(function () {
      $(this).addClass("active");
      $(".cf-options__list").removeClass("active");
      $(".cf-table").addClass("cf-table-grid");
    });
  }

  $(document).ready(function () {
    var files = [
      {
        title: "Agreement Purchase",
        type: "pdf",
        size: "108 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Agreement-Purchase.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Agreement-Purchase.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Document Library",
        type: "pdf",
        size: "27 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Financial",
        type: "xlsx",
        size: "81 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Financial.xlsx",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Financial.xlsx",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "General Information",
        type: "docx",
        size: "109 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/General-Information.docx",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/General-Information.docx",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Impact Moderato",
        type: "mp3",
        size: "746 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Logo",
        type: "png",
        size: "17 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Logo.png",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Logo.png",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Outline",
        type: "pdf",
        size: "27 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Outline.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Outline.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Video Tutorial",
        type: "mp4",
        size: "1 MB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Video-Tutorial.mp4",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Video-Tutorial.mp4",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Agreement Purchase",
        type: "pdf",
        size: "108 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Agreement-Purchase.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Agreement-Purchase.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Document Library",
        type: "pdf",
        size: "27 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Financial",
        type: "xlsx",
        size: "81 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Financial.xlsx",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Financial.xlsx",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "General Information",
        type: "docx",
        size: "109 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/General-Information.docx",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/General-Information.docx",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Impact Moderato",
        type: "mp3",
        size: "746 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Logo",
        type: "png",
        size: "17 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Logo.png",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Logo.png",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Outline",
        type: "pdf",
        size: "27 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Outline.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Outline.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Video Tutorial",
        type: "mp4",
        size: "1 MB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Video-Tutorial.mp4",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Video-Tutorial.mp4",
        alt: "",
        modified: "Apr 19, 2023",
      },
    ];
    renderTable(files);
    changeTableStyle();
  });
})(jQuery);
