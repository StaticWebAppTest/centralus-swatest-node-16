module.exports = async function (context, req) {
  const date = "2024-08-05T12:20:33.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

