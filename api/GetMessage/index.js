module.exports = async function (context, req) {
  const date = "2023-01-15T00:54:12.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

