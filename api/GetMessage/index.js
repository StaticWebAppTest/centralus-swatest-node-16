module.exports = async function (context, req) {
  const date = "2023-02-07T13:17:46.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

