module.exports = async function (context, req) {
  const date = "2023-09-06T01:41:21.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

