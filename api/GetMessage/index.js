module.exports = async function (context, req) {
  const date = "2024-05-15T00:44:14.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

