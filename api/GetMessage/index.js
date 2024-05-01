module.exports = async function (context, req) {
  const date = "2024-05-01T21:08:52.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

