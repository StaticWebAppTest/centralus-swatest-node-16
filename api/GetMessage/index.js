module.exports = async function (context, req) {
  const date = "2024-08-31T12:18:51.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

