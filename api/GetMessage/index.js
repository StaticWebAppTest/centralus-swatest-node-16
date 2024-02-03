module.exports = async function (context, req) {
  const date = "2024-02-03T00:40:50.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

