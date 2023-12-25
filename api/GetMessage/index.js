module.exports = async function (context, req) {
  const date = "2023-12-25T22:08:16.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

