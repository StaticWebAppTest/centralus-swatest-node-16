module.exports = async function (context, req) {
  const date = "2024-02-06T12:16:04.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

