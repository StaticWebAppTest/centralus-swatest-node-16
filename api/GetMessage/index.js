module.exports = async function (context, req) {
  const date = "2023-06-22T22:09:33.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

