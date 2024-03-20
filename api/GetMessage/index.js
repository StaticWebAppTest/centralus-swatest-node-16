module.exports = async function (context, req) {
  const date = "2024-03-20T12:16:10.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

