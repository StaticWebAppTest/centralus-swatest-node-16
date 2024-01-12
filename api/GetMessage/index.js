module.exports = async function (context, req) {
  const date = "2024-01-12T22:08:44.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

