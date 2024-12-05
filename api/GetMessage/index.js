module.exports = async function (context, req) {
  const date = "2024-12-05T22:11:50.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

