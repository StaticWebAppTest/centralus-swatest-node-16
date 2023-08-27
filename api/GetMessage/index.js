module.exports = async function (context, req) {
  const date = "2023-08-27T00:41:52.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

