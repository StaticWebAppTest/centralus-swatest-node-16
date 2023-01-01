module.exports = async function (context, req) {
  const date = "2023-01-01T21:07:48.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

