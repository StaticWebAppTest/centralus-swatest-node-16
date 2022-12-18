module.exports = async function (context, req) {
  const date = "2022-12-18T00:47:34.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

