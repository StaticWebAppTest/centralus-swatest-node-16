module.exports = async function (context, req) {
  const date = "2022-02-26T21:08:21.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

