module.exports = async function (context, req) {
  const date = "2023-12-08T22:08:38.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

