module.exports = async function (context, req) {
  const date = "2023-03-22T00:47:54.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

