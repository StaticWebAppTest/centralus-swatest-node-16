module.exports = async function (context, req) {
  const date = "2026-08-20T03:39:14.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

