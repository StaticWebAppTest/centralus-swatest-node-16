module.exports = async function (context, req) {
  const date = "2024-06-12T00:47:32.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

