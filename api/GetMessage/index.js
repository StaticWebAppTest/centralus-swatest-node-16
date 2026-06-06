module.exports = async function (context, req) {
  const date = "2026-06-06T00:14:01.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

