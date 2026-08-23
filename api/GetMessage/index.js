module.exports = async function (context, req) {
  const date = "2026-08-23T13:26:03.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

