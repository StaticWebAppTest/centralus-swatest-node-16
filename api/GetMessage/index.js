module.exports = async function (context, req) {
  const date = "2022-03-26T00:43:10.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

