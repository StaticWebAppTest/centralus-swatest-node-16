module.exports = async function (context, req) {
  const date = "2024-06-15T22:09:46.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

