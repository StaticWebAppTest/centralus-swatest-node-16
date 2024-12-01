module.exports = async function (context, req) {
  const date = "2024-12-01T22:11:13.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

