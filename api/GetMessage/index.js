module.exports = async function (context, req) {
  const date = "2024-02-17T22:08:33.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

