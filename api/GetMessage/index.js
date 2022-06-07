module.exports = async function (context, req) {
  const date = "2022-06-07T00:47:36.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

