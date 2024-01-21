module.exports = async function (context, req) {
  const date = "2024-01-21T07:08:28.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

