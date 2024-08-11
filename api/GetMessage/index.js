module.exports = async function (context, req) {
  const date = "2024-08-11T10:10:28.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

