module.exports = async function (context, req) {
  const date = "2023-01-16T21:08:26.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

