module.exports = async function (context, req) {
  const date = "2024-03-22T01:40:37.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

