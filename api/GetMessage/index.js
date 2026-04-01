module.exports = async function (context, req) {
  const date = "2026-04-01T19:53:45.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

