module.exports = async function (context, req) {
  const date = "2024-01-09T22:09:03.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

