module.exports = async function (context, req) {
  const date = "2024-03-08T22:09:56.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

