module.exports = async function (context, req) {
  const date = "2023-02-26T00:59:02.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

