module.exports = async function (context, req) {
  const date = "2024-01-09T00:44:21.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

