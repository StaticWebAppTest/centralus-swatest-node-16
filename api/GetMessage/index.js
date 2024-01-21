module.exports = async function (context, req) {
  const date = "2024-01-21T23:08:59.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

