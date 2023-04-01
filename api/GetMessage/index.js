module.exports = async function (context, req) {
  const date = "2023-04-01T10:08:25.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

