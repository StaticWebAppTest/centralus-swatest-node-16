module.exports = async function (context, req) {
  const date = "2026-02-20T04:08:31.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

