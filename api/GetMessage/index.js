module.exports = async function (context, req) {
  const date = "2024-04-22T00:44:06.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

