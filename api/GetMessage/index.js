module.exports = async function (context, req) {
  const date = "2024-12-20T00:57:05.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

