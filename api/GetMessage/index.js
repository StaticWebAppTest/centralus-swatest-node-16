module.exports = async function (context, req) {
  const date = "2024-04-22T12:18:11.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

