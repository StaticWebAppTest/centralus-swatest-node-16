module.exports = async function (context, req) {
  const date = "2026-07-19T15:51:26.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

