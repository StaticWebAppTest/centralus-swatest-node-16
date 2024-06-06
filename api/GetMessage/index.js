module.exports = async function (context, req) {
  const date = "2024-06-06T00:45:42.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

