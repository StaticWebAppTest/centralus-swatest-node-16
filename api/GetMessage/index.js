module.exports = async function (context, req) {
  const date = "2025-01-13T18:17:14.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

