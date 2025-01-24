module.exports = async function (context, req) {
  const date = "2025-01-24T22:10:36.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

