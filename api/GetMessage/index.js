module.exports = async function (context, req) {
  const date = "2023-08-21T01:39:52.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

