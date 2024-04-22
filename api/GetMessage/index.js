module.exports = async function (context, req) {
  const date = "2024-04-22T01:50:35.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

