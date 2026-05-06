module.exports = async function (context, req) {
  const date = "2026-05-06T08:12:27.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

