module.exports = async function (context, req) {
  const date = "2023-05-31T22:07:46.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

