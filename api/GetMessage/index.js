module.exports = async function (context, req) {
  const date = "2024-04-01T10:10:53.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

