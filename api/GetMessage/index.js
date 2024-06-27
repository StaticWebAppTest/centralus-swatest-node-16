module.exports = async function (context, req) {
  const date = "2024-06-27T00:47:50.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

