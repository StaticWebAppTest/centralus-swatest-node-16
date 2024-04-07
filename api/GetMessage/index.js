module.exports = async function (context, req) {
  const date = "2024-04-07T00:46:39.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

