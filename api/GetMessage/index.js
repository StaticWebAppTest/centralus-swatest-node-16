module.exports = async function (context, req) {
  const date = "2022-12-26T00:49:27.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

