module.exports = async function (context, req) {
  const date = "2026-04-12T20:27:52.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

