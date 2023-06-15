module.exports = async function (context, req) {
  const date = "2023-06-15T12:17:19.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

