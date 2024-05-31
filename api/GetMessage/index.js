module.exports = async function (context, req) {
  const date = "2024-05-31T12:18:04.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

