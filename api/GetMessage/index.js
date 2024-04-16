module.exports = async function (context, req) {
  const date = "2024-04-16T22:09:17.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

