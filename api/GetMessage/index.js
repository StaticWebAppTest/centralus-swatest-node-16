module.exports = async function (context, req) {
  const date = "2023-12-04T12:17:13.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

