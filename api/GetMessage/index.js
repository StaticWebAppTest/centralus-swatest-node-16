module.exports = async function (context, req) {
  const date = "2026-08-19T13:37:24.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

