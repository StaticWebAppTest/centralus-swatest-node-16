module.exports = async function (context, req) {
  const date = "2023-06-01T19:06:48.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

