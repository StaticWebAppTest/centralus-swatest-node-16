module.exports = async function (context, req) {
  const date = "2023-07-22T18:09:55.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

