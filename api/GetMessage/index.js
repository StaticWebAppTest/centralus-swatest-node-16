module.exports = async function (context, req) {
  const date = "2024-04-07T01:51:03.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

