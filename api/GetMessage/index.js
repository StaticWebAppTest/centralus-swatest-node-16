module.exports = async function (context, req) {
  const date = "2024-01-12T15:08:59.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

