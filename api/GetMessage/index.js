module.exports = async function (context, req) {
  const date = "2024-04-03T00:41:19.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

