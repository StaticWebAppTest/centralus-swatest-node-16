module.exports = async function (context, req) {
  const date = "2026-06-28T19:07:42.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

