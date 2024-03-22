module.exports = async function (context, req) {
  const date = "2024-03-22T22:08:36.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

