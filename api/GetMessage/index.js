module.exports = async function (context, req) {
  const date = "2026-05-24T09:15:58.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

