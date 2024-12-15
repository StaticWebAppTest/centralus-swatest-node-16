module.exports = async function (context, req) {
  const date = "2024-12-15T22:11:11.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

