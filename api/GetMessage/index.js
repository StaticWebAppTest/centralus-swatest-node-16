module.exports = async function (context, req) {
  const date = "2024-08-15T22:10:43.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

