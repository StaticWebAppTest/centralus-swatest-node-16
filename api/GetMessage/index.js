module.exports = async function (context, req) {
  const date = "2024-04-29T00:43:48.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

