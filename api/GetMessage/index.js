module.exports = async function (context, req) {
  const date = "2025-02-26T05:12:05.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

