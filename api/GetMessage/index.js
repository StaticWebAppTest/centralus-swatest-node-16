module.exports = async function (context, req) {
  const date = "2023-06-29T22:08:45.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

