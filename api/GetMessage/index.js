module.exports = async function (context, req) {
  const date = "2024-01-23T07:09:39.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

