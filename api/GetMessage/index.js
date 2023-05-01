module.exports = async function (context, req) {
  const date = "2023-05-01T19:06:55.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

