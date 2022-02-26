module.exports = async function (context, req) {
  const date = "2022-02-26T00:37:39.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

