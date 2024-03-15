module.exports = async function (context, req) {
  const date = "2024-03-15T14:09:05.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

