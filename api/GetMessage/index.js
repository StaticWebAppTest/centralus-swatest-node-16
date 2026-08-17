module.exports = async function (context, req) {
  const date = "2026-08-17T19:21:33.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

