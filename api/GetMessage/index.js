module.exports = async function (context, req) {
  const date = "2024-01-22T12:18:23.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

