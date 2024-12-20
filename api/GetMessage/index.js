module.exports = async function (context, req) {
  const date = "2024-12-20T19:09:05.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

