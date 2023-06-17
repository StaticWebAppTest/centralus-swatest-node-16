module.exports = async function (context, req) {
  const date = "2023-06-17T22:08:15.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

