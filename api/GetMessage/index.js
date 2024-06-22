module.exports = async function (context, req) {
  const date = "2024-06-22T22:09:26.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

