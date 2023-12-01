module.exports = async function (context, req) {
  const date = "2023-12-01T16:11:49.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

