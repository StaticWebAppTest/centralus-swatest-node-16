module.exports = async function (context, req) {
  const date = "2024-02-08T12:15:46.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

