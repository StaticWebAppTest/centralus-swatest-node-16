module.exports = async function (context, req) {
  const date = "2023-11-29T21:08:16.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

