module.exports = async function (context, req) {
  const date = "2025-01-17T22:10:25.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

