module.exports = async function (context, req) {
  const date = "2023-03-29T21:08:35.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

