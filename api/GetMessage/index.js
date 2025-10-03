module.exports = async function (context, req) {
  const date = "2025-10-03T04:15:15.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

