module.exports = async function (context, req) {
  const date = "2024-12-20T06:16:47.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

