module.exports = async function (context, req) {
  const date = "2024-08-01T14:10:16.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

