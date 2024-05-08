module.exports = async function (context, req) {
  const date = "2024-05-08T12:18:04.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

