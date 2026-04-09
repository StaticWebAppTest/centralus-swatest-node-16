module.exports = async function (context, req) {
  const date = "2026-04-09T16:59:33.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

