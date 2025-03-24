module.exports = async function (context, req) {
  const date = "2025-03-24T20:12:31.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

