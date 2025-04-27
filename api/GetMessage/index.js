module.exports = async function (context, req) {
  const date = "2025-04-27T01:07:44.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

