module.exports = async function (context, req) {
  const date = "2024-07-27T00:49:02.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

