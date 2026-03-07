module.exports = async function (context, req) {
  const date = "2026-03-07T19:16:42.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

