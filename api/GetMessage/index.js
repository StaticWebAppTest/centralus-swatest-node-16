module.exports = async function (context, req) {
  const date = "2024-03-03T10:11:03.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

