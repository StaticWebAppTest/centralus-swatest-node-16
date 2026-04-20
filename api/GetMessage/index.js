module.exports = async function (context, req) {
  const date = "2026-04-20T02:03:02.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

