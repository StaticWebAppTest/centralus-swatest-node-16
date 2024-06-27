module.exports = async function (context, req) {
  const date = "2024-06-27T01:56:45.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

