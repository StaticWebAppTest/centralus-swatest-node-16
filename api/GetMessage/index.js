module.exports = async function (context, req) {
  const date = "2024-01-06T23:08:49.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

