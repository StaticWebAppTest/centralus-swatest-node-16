module.exports = async function (context, req) {
  const date = "2024-01-27T01:39:43.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

