module.exports = async function (context, req) {
  const date = "2024-03-26T03:09:32.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

