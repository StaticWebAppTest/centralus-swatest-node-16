module.exports = async function (context, req) {
  const date = "2024-03-22T16:12:24.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

