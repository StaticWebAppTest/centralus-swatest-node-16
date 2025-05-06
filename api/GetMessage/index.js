module.exports = async function (context, req) {
  const date = "2025-05-06T22:12:17.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

