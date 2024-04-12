module.exports = async function (context, req) {
  const date = "2024-04-12T20:10:16.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

