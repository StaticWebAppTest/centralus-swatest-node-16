module.exports = async function (context, req) {
  const date = "2024-08-12T08:14:56.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

