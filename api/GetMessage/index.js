module.exports = async function (context, req) {
  const date = "2026-05-20T03:23:12.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

