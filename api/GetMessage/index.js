module.exports = async function (context, req) {
  const date = "2024-01-31T08:11:28.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

