module.exports = async function (context, req) {
  const date = "2026-04-10T23:28:42.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

