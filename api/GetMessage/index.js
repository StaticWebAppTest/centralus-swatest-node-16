module.exports = async function (context, req) {
  const date = "2026-04-05T19:28:30.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

