module.exports = async function (context, req) {
  const date = "2024-06-01T20:09:24.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

