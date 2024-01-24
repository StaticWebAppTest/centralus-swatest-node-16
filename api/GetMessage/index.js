module.exports = async function (context, req) {
  const date = "2024-01-24T23:08:59.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

