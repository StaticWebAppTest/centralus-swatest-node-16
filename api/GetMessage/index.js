module.exports = async function (context, req) {
  const date = "2026-03-24T12:56:21.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

