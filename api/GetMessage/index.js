module.exports = async function (context, req) {
  const date = "2025-01-13T20:12:35.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

