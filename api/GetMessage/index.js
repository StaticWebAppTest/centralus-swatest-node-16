module.exports = async function (context, req) {
  const date = "2023-02-23T00:51:21.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

