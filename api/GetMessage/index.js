module.exports = async function (context, req) {
  const date = "2024-05-31T21:09:46.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

