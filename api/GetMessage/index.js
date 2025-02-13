module.exports = async function (context, req) {
  const date = "2025-02-13T20:12:46.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

