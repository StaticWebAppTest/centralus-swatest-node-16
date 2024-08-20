module.exports = async function (context, req) {
  const date = "2024-08-20T19:08:33.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

