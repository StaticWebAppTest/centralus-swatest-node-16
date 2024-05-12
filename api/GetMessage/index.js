module.exports = async function (context, req) {
  const date = "2024-05-12T22:08:21.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

