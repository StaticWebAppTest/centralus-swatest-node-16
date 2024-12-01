module.exports = async function (context, req) {
  const date = "2024-12-01T20:12:31.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

