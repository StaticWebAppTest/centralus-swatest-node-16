module.exports = async function (context, req) {
  const date = "2024-05-08T22:08:35.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

