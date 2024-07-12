module.exports = async function (context, req) {
  const date = "2024-07-12T00:48:32.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

