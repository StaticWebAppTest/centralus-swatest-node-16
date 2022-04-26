module.exports = async function (context, req) {
  const date = "2022-04-26T03:47:53.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

