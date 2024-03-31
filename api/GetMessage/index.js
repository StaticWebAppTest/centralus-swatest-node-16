module.exports = async function (context, req) {
  const date = "2024-03-31T11:07:46.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

