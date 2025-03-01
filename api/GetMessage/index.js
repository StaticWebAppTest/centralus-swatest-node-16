module.exports = async function (context, req) {
  const date = "2025-03-01T22:10:06.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

