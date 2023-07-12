module.exports = async function (context, req) {
  const date = "2023-07-12T12:20:28.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

