module.exports = async function (context, req) {
  const date = "2023-02-22T00:51:22.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

