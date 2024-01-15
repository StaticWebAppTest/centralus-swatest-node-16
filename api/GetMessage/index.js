module.exports = async function (context, req) {
  const date = "2024-01-15T14:09:12.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

