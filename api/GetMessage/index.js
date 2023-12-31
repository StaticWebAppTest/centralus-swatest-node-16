module.exports = async function (context, req) {
  const date = "2023-12-31T12:15:27.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

