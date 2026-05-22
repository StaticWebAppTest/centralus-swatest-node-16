module.exports = async function (context, req) {
  const date = "2026-05-22T10:19:15.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

