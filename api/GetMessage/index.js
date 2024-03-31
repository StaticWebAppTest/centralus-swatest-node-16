module.exports = async function (context, req) {
  const date = "2024-03-31T22:08:51.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

