module.exports = async function (context, req) {
  const date = "2026-08-14T10:51:27.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

