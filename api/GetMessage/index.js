module.exports = async function (context, req) {
  const date = "2026-05-09T14:43:07.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

