module.exports = async function (context, req) {
  const date = "2024-06-22T12:16:56.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

