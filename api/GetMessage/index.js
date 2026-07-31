module.exports = async function (context, req) {
  const date = "2026-07-31T08:51:19.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

