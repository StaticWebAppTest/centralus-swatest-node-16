module.exports = async function (context, req) {
  const date = "2026-04-18T11:28:41.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

