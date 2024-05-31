module.exports = async function (context, req) {
  const date = "2024-05-31T11:09:05.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

