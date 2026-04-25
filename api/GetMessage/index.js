module.exports = async function (context, req) {
  const date = "2026-04-25T01:51:51.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

