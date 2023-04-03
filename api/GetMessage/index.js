module.exports = async function (context, req) {
  const date = "2023-04-03T00:46:17.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

