module.exports = async function (context, req) {
  const date = "2024-04-16T00:41:57.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

