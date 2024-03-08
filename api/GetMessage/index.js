module.exports = async function (context, req) {
  const date = "2024-03-08T03:09:33.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

