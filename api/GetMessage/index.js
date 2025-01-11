module.exports = async function (context, req) {
  const date = "2025-01-11T21:09:47.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

