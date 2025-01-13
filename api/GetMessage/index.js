module.exports = async function (context, req) {
  const date = "2025-01-13T06:17:54.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

