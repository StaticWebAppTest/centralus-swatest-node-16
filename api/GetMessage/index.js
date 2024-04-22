module.exports = async function (context, req) {
  const date = "2024-04-22T02:20:50.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

