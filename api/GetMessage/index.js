module.exports = async function (context, req) {
  const date = "2024-01-15T11:08:23.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

