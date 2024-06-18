module.exports = async function (context, req) {
  const date = "2024-06-18T00:47:52.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

