module.exports = async function (context, req) {
  const date = "2024-03-31T23:08:28.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

