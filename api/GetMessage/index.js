module.exports = async function (context, req) {
  const date = "2026-08-25T16:27:14.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

