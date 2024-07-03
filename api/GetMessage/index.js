module.exports = async function (context, req) {
  const date = "2024-07-03T00:47:46.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

