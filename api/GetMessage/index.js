module.exports = async function (context, req) {
  const date = "2024-03-08T21:08:29.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

