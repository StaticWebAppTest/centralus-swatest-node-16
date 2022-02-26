module.exports = async function (context, req) {
  const date = "2022-02-26T02:27:26.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

