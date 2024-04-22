module.exports = async function (context, req) {
  const date = "2024-04-22T22:10:18.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

