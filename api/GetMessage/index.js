module.exports = async function (context, req) {
  const date = "2024-03-15T22:09:20.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

