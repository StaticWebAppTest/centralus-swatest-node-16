module.exports = async function (context, req) {
  const date = "2024-12-06T21:11:34.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

