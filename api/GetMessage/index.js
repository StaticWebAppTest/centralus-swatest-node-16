module.exports = async function (context, req) {
  const date = "2023-03-23T00:47:26.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

