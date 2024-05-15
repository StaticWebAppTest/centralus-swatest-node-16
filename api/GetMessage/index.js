module.exports = async function (context, req) {
  const date = "2024-05-15T19:08:04.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

