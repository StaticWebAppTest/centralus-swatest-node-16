module.exports = async function (context, req) {
  const date = "2024-01-25T17:08:38.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

