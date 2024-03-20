module.exports = async function (context, req) {
  const date = "2024-03-20T00:40:58.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

