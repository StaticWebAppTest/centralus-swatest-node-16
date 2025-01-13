module.exports = async function (context, req) {
  const date = "2025-01-13T22:10:31.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

