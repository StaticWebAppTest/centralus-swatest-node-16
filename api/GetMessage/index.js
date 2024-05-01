module.exports = async function (context, req) {
  const date = "2024-05-01T15:09:04.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

