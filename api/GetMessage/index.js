module.exports = async function (context, req) {
  const date = "2026-05-21T13:58:12.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

