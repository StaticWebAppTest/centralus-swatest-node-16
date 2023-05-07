module.exports = async function (context, req) {
  const date = "2023-05-07T00:51:36.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

