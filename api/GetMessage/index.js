module.exports = async function (context, req) {
  const date = "2026-08-13T14:17:58.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

