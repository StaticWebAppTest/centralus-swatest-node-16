module.exports = async function (context, req) {
  const date = "2023-09-27T00:41:18.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

