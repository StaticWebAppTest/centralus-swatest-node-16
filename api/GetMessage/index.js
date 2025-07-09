module.exports = async function (context, req) {
  const date = "2025-07-09T20:15:16.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

