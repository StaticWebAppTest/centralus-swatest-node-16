module.exports = async function (context, req) {
  const date = "2024-03-26T22:09:05.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

