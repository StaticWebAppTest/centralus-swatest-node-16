module.exports = async function (context, req) {
  const date = "2025-03-20T17:11:43.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

