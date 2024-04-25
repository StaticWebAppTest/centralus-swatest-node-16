module.exports = async function (context, req) {
  const date = "2024-04-25T01:49:38.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

