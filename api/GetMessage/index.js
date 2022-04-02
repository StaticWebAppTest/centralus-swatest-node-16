module.exports = async function (context, req) {
  const date = "2022-04-02T21:09:21.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

