module.exports = async function (context, req) {
  const date = "2025-02-02T23:10:26.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

