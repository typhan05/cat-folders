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
    var svgDownload =
      '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g clip-path="url(#clip0_1_337)">' +
      '<path d="M5.30186e-07 8.99044C0.00168761 4.04699 4.03718 0.00393964 8.97357 2.87451e-06C13.9611 -0.00393389 18.0017 4.03631 17.9994 9.02587C17.9978 13.9868 13.9448 18.0073 8.95389 18C4.02312 17.9927 -0.00168655 13.9429 5.30186e-07 8.99044ZM8.0991 11.3176C7.98213 11.2108 7.91465 11.1534 7.85166 11.091C7.53899 10.7811 7.23644 10.46 6.91252 10.1625C6.54586 9.8256 6.01162 9.85034 5.67196 10.1962C5.3351 10.5387 5.30305 11.0662 5.64271 11.4138C6.55317 12.3446 7.47488 13.2646 8.40615 14.1752C8.743 14.5042 9.24856 14.4862 9.6051 14.1707C9.73838 14.0531 9.86041 13.9226 9.98638 13.7967C10.7551 13.0284 11.5289 12.2658 12.2887 11.4886C12.7672 10.9993 12.6199 10.257 12.0041 10.0084C11.6251 9.85541 11.2871 9.95045 11.0042 10.2395C10.6612 10.5905 10.321 10.9448 9.97963 11.2974C9.95376 11.2816 9.92789 11.2665 9.90203 11.2507C9.90203 11.1517 9.90203 11.0527 9.90203 10.9538C9.90203 8.84534 9.89978 6.73749 9.90427 4.62907C9.90484 4.34338 9.84635 4.0858 9.64165 3.8839C9.3616 3.60776 9.02699 3.54084 8.65809 3.68088C8.31842 3.80966 8.10191 4.14091 8.10135 4.54584C8.0991 6.68238 8.10023 8.81835 8.10023 10.9549C8.10023 11.0533 8.10023 11.1523 8.10023 11.3171L8.0991 11.3176Z" fill="currentColor"/>' +
      '<path d="M8.09912 11.3176C8.09912 11.1528 8.09912 11.0539 8.09912 10.9554C8.09912 8.8189 8.09799 6.68292 8.10024 4.54638C8.10024 4.1409 8.31731 3.81021 8.65698 3.68142C9.02589 3.54138 9.36049 3.60831 9.64055 3.88445C9.84581 4.08634 9.90373 4.34448 9.90317 4.62962C9.89867 6.73804 9.90092 8.84589 9.90092 10.9543C9.90092 11.0533 9.90092 11.1523 9.90092 11.2513C9.92679 11.267 9.95266 11.2822 9.97852 11.2979C10.3199 10.9453 10.6595 10.591 11.0031 10.2401C11.286 9.951 11.624 9.85595 12.003 10.0089C12.6188 10.2575 12.7661 11.0004 12.2876 11.4891C11.5278 12.2658 10.7535 13.0284 9.98527 13.7972C9.8593 13.9232 9.73727 14.0531 9.60399 14.1712C9.24746 14.4867 8.7419 14.5053 8.40504 14.1757C7.47434 13.2652 6.55263 12.3451 5.64161 11.4143C5.30138 11.0668 5.334 10.5393 5.67085 10.1968C6.01108 9.85089 6.54476 9.82614 6.91142 10.163C7.23533 10.4605 7.53788 10.7817 7.85056 11.0915C7.91354 11.154 7.98159 11.2119 8.09799 11.3182L8.09912 11.3176Z" fill="white"/>' +
      "</g>" +
      "<defs>" +
      '<clipPath id="clip0_1_337">' +
      '<rect width="18" height="18" fill="white"/>' +
      "</clipPath>" +
      "</defs>" +
      "</svg>";

    var table = $("#tableCatFolders")
      .DataTable({
        data: files,
        columnDefs: [{ orderable: false, targets: [4] }],
        columns: [
          {
            data: "title",
            render: function (data, type, row) {
              return (
                "<div class='flex'><a href='" +
                row.url +
                "' class='cf-icon icon-" +
                row.type +
                "'>" +
                row.title +
                "</a></div>"
              );
            },
          },
          { data: "type" },
          { data: "size" },
          { data: "modified" },
          {
            data: "link",
            render: function (data, type, row) {
              return (
                "<span class='cf-updated'><small>Updated</small>" +
                row.modified +
                "</span>" +
                '<a href="' +
                row.link +
                '" class="btn-download">' +
                svgDownload +
                " Download</a>"
              );
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
        responsive: true,
        sDom: '<"cf-table__top"f <"cf-options_info"l <"cf-options" <"cf-options__list"> <"cf-options__grid">>>><"cf-table__main"rt><"cf-table__bottom" lip>',
      })
      .on("search.dt", function () {
        var info = table.page.info().pages;
        if (info === 0) {
          $(".cf-table").addClass("cf-empty-data");
        } else {
          $(".cf-table").removeClass("cf-empty-data");
        }
      });

    //check no data

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

  function hoverLineTable() {
    $(".cf-table tbody tr").hover(
      function () {
        $(this).prev("tr").addClass("prev-hover");
      },
      function () {
        $(this).prev().removeClass("prev-hover");
      }
    );
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
        type: "pptx",
        size: "27 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Financial",
        type: "wav",
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
        type: "mp4",
        size: "746 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Logo",
        type: "jpg",
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
        title: "Greement Purchase",
        type: "zip",
        size: "108 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Agreement-Purchase.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Agreement-Purchase.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Ocument Library",
        type: "other",
        size: "27 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Document-Library.pdf",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Inancial",
        type: "xlsx",
        size: "81 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Financial.xlsx",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Financial.xlsx",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Reneral Information",
        type: "docx",
        size: "109 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/General-Information.docx",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/General-Information.docx",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Rc Impact Moderato",
        type: "mp4",
        size: "746 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Sound.mp3",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Reverse Logo",
        type: "jpg",
        size: "17 KB",
        url: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Logo.png",
        link: "https://media-folder.ninjateam.org/wp-content/uploads/2023/04/Logo.png",
        alt: "",
        modified: "Apr 19, 2023",
      },
      {
        title: "Outline",
        type: "other",
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
    hoverLineTable();
  });
})(jQuery);
