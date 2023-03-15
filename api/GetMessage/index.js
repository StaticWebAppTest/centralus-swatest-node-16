module.exports = async function (context, req) {
  const date = "2023-03-15T21:08:58.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

