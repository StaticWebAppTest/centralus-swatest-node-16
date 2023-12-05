module.exports = async function (context, req) {
  const date = "2023-12-05T21:08:27.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

