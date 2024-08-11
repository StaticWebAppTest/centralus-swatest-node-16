module.exports = async function (context, req) {
  const date = "2024-08-11T12:18:18.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

