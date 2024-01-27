module.exports = async function (context, req) {
  const date = "2024-01-27T12:13:57.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

