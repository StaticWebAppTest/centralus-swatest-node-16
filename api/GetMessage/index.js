module.exports = async function (context, req) {
  const date = "2023-01-06T21:08:24.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

