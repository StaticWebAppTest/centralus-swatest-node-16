module.exports = async function (context, req) {
  const date = "2023-06-26T22:09:31.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

